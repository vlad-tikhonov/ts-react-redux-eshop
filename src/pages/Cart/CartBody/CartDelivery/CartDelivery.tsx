import { Text, Button, Htag } from "ui";
import { SelectField, TextField } from "components";
import { CartSummary } from "widgets";
import { SubmitHandler, useForm } from "react-hook-form";
import { ReactComponent as ChevronIcon } from "assets/icons/chevron-left.svg";
import { LOCALITIES } from "constants/localities";
import styles from "./CartDelivery.module.sass";
import { getStringWeekRange } from "helpers/utils";

interface CartDeliveryProps {
  toBack: () => void;
  className?: string;
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
}

const renderChevronIcon = (className: string) => (
  <ChevronIcon className={className} />
);

export const CartDelivery = ({ toBack, className }: CartDeliveryProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const weekRange = getStringWeekRange();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.delivery}>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              register={register("locality")}
            />
            <TextField
              labelText="Улица"
              size="m"
              className={styles.street}
              register={register("street")}
            />
            <TextField
              labelText="Дом"
              size="m"
              className={styles.house}
              register={register("house")}
            />
            <TextField
              labelText="Квартира"
              size="m"
              className={styles.apartment}
              register={register("apartment")}
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
            />
            <div className={styles.time}>
              <Text size="s">Время</Text>
              <div className={styles.timeOptioons}>
                {timeOptions.map((el, i) => (
                  <Button accent="secondary" size="m" key={i}>
                    {el}
                  </Button>
                ))}
              </div>
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
        <Button accent="primary" size="l" className={styles.submit} disabled>
          Заказать
        </Button>
      </div>
    </div>
  );
};
