import { Text, Button, Htag } from "ui";
import { WithMessage, Select, InputText } from "components";
import { CartSummary } from "widgets";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as AlerIcon } from "assets/icons/alert-circle.svg";
import { LOCALITIES } from "constants/localities";
import { getStringWeekRange } from "helpers/utils";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserId } from "store/auth/features";
import { useProductsForOrder, useCartActions } from "store/cart/features";
import {
  useOrdersActions,
  useNewOrder,
  useOrdersErrors,
} from "store/orders/features";
import {
  FORM_FIELDS,
  ORDER_SUCCESSFULLY_CREATED,
  TIME_OPTIONS,
} from "./constants";
import { toastSuccess, toastFailure } from "events-bus";
import styles from "./cart-delivery.module.sass";

interface CartDeliveryProps {
  toBack: () => void;
}

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

  const { reset: resetCart } = useCartActions();
  const {
    create: createOrder,
    resetNewOrder,
    resetOrdersErrors,
  } = useOrdersActions();

  const userId = useUserId();
  const products = useProductsForOrder();
  const newOrder = useNewOrder();
  const ordersErrors = useOrdersErrors();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
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
    required: FORM_FIELDS.time.requiredMessage,
  });

  register("locality", {
    required: FORM_FIELDS.locality.requiredMessage,
  });

  register("date", {
    required: FORM_FIELDS.date.requiredMessage,
  });

  useEffect(() => {
    if (!newOrder) return;
    toastSuccess.broadcast([ORDER_SUCCESSFULLY_CREATED]);
    resetNewOrder();
    navigate("/orders");
  }, [newOrder]);

  useEffect(() => {
    if (!ordersErrors.length) return;
    toastFailure.broadcast(ordersErrors);
    resetOrdersErrors();
  }, [ordersErrors]);

  return (
    <div className={styles.delivery}>
      <form className={styles.form} autoComplete="off">
        <div>
          <Htag size="m" className={styles.title}>
            Куда
          </Htag>
          <div className={styles.where}>
            <WithMessage message={errors.locality?.message}>
              <Select
                options={LOCALITIES}
                label="Населенный пункт"
                onChange={(value: string) => {
                  setValue("locality", value);
                  trigger("locality");
                }}
              />
            </WithMessage>
            <WithMessage message={errors.street?.message}>
              <InputText
                label="Улица"
                className={styles.street}
                inputSize="m"
                {...register("street", {
                  required: FORM_FIELDS.street.requiredMessage,
                })}
              />
            </WithMessage>
            <WithMessage message={errors.street?.message}>
              <InputText
                label="Дом"
                className={styles.house}
                inputSize="m"
                {...register("house", {
                  required: FORM_FIELDS.house.requiredMessage,
                })}
              />
            </WithMessage>
            <WithMessage message={errors.apartment?.message}>
              <InputText
                label="Квартира"
                className={styles.apartment}
                inputSize="m"
                {...register("apartment", {
                  required: FORM_FIELDS.apartment.requiredMessage,
                })}
              />
            </WithMessage>
            <WithMessage message={errors.extra?.message}>
              <InputText
                label="Дополнительно"
                className={styles.extra}
                inputSize="m"
                {...register("extra")}
              />
            </WithMessage>
          </div>
        </div>
        <div>
          <Htag size="m" className={styles.title}>
            Когда
          </Htag>
          <div className={styles.when}>
            <WithMessage message={errors.date?.message}>
              <Select
                options={weekRange}
                label="Дата"
                onChange={(value: string) => {
                  setValue("date", value);
                  trigger("date");
                }}
              />
            </WithMessage>
            <WithMessage message={errors.time?.message} className={styles.time}>
              <>
                <Text size="s" className={styles.text}>
                  Время
                </Text>
                <div className={styles.timeOptions}>
                  {TIME_OPTIONS.map((el, i) => (
                    <Button
                      accent={time === el ? "secondary" : "grayscale"}
                      size="m"
                      key={i}
                      type="button"
                      onClick={() => {
                        handleChangeTime(el);
                      }}
                    >
                      {el}
                    </Button>
                  ))}
                </div>
              </>
            </WithMessage>
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
