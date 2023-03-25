import { Text, Button, Htag } from "ui";
import { SelectField, TextField } from "components";
import { CartSummary } from "widgets";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as AlerIcon } from "assets/icons/alert-circle.svg";
import { LOCALITIES } from "constants/localities";
import styles from "./CartDelivery.module.sass";
import { getStringWeekRange } from "helpers/utils";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectCartProductsForOrder } from "store/cart/cart-selectors";
import { createOrder } from "store/orders/orders-slice";
import { selectUserId } from "store/auth/auth-selectors";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { resetCart } from "store/cart/cart-slice";

interface CartDeliveryProps {
  toBack: () => void;
}

const timeOptions = [
  "8:00 - 14:00",
  "14:00 - 18.00",
  "18:00 - 20:00",
  "20:00 - 22:00",
];

interface FormValues {
  locality: string;
  street: string;
  house: string;
  apartment: string;
  extra: string;
  date: string;
  time: string;
}

const renderChevronIcon = (className: string) => (
  <ChevronIcon className={className} />
);

export const CartDelivery = ({ toBack }: CartDeliveryProps) => {
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  const products = useAppSelector(selectCartProductsForOrder);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const weekRange = getStringWeekRange();

  const onSubmit: SubmitHandler<FormValues> = ({
    apartment,
    date,
    extra,
    house,
    locality,
    street,
    time,
  }) => {
    if (!userId) {
      return;
    }

    dispatch(
      createOrder({
        userId,
        apartment,
        date,
        extra,
        house,
        locality,
        street,
        time,
        products,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(resetCart());
        navigate("/orders");
        toast.success("Заказ успешно создан", { duration: 5000 });
      }
    });
  };

  const handleChangeTime = (time: string) => {
    setTime(time);
    setValue("time", time);
    if (errors.time?.message) {
      errors.time.message = "";
    }
  };

  register("time", {
    required: "Выберите время доставки",
  });

  return (
    <div className={styles.delivery}>
      <form className={styles.form} autoComplete="off">
        <div>
          <Htag size="m" className={styles.title}>
            Куда
          </Htag>
          <div className={styles.where}>
            <SelectField
              labelText="Населенный пункт"
              size="m"
              list={LOCALITIES}
              className={styles.locality}
              register={register("locality", {
                required: "Выберите населенный пункт",
              })}
              setFormValue={setValue}
              message={errors.locality?.message}
              name={"locality"}
            />
            <TextField
              labelText="Улица"
              size="m"
              className={styles.street}
              register={register("street", {
                required: "Введите улицу",
              })}
              message={errors.street?.message}
            />
            <TextField
              labelText="Дом"
              size="m"
              className={styles.house}
              register={register("house", {
                required: "Введите номер дома",
              })}
              message={errors.house?.message}
            />
            <TextField
              labelText="Квартира"
              size="m"
              className={styles.apartment}
              register={register("apartment", {
                required: "Введите номер квартиры",
              })}
              message={errors.apartment?.message}
            />
            <TextField
              labelText="Дополнительно"
              size="m"
              className={styles.extra}
              register={register("extra")}
            />
          </div>
        </div>
        <div>
          <Htag size="m" className={styles.title}>
            Когда
          </Htag>
          <div className={styles.when}>
            <SelectField
              labelText="Дата"
              list={weekRange}
              size="m"
              className={styles.date}
              register={register("date", {
                required: "Выберите дату доставки",
              })}
              setFormValue={setValue}
              name={"date"}
              message={errors.date?.message}
            />
            <div className={styles.time}>
              <Text size="s" className={styles.text}>
                Время
              </Text>
              <div className={styles.timeOptions}>
                {timeOptions.map((el, i) => (
                  <Button
                    accent={time === el ? "secondary" : "grayscale"}
                    size="m"
                    key={i}
                    onClick={() => {
                      handleChangeTime(el);
                    }}
                  >
                    {el}
                  </Button>
                ))}
              </div>
              <Text size="xs" className={styles.message}>
                {errors.time?.message}
              </Text>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.summary}>
        <CartSummary />
        <Button
          accent="secondary"
          size="m"
          className={styles.back}
          renderLeftIcon={renderChevronIcon}
          onClick={toBack}
        >
          Назад к товарам
        </Button>
        <Button
          accent="primary"
          size="l"
          className={styles.submit}
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
          disabled={!userId}
        >
          Заказать
        </Button>
        {!userId && (
          <div className={styles.alert}>
            <AlerIcon className={styles.alert_icon} />
            <Text size="xs" className={styles.alert_text}>
              Выполние вход, чтобы завершить оформление заказа
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};
