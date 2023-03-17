import styles from "./RegisterForm.module.sass";
import { Htag, TextField, Button } from "ui";
import { InputDate, ButtonsGroup } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordField, SelectField, Option } from "components";
import { Sex } from "types";
import cn from "classnames";
interface RegisterFormProps {
  className?: string;
}

interface FormValues {
  email: string;
  name: string;
  surname: string;
  password: string;
  confirm: string;
  birth: string;
  region: string;
  locality: string;
  sex: string;
  card: number;
  phone: string;
}

const regions = ["Москва"];

const cities = ["Москва"];

const options: [Option, Option] = [
  {
    value: Sex.Male,
    label: "Мужской",
  },
  {
    value: Sex.Female,
    label: "Женский",
  },
];

export const RegisterForm = ({ className }: RegisterFormProps) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  register("sex");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(styles.form, className)}
      autoComplete="off"
    >
      <Htag size="s" className={styles.title}>
        Регистрация
      </Htag>
      <Htag size="xs" className={styles.title_req}>
        Обязательные поля
      </Htag>
      <div className={styles.required}>
        <div className={styles.left}>
          <TextField
            labelText="E-mail"
            size="m"
            register={register("email", {
              required: "Введите E-mail",
            })}
            type="email"
            message={errors.email?.message}
          />
          <TextField
            labelText="Фамилия"
            size="m"
            register={register("surname", {
              required: "Введите фамилию",
            })}
            message={errors.surname?.message}
          />
          <TextField
            labelText="Имя"
            size="m"
            register={register("name", {
              required: "Введите имя",
            })}
            message={errors.name?.message}
          />
          <PasswordField
            labelText="Пароль"
            size="m"
            register={register("password", {
              required: "Введите пароль",
            })}
            message={errors.password?.message}
          />
          <PasswordField
            labelText="Повторите пароль"
            size="m"
            register={register("confirm", {
              required: "Повторите пароль",
            })}
            message={errors.confirm?.message}
          />
        </div>
        <div className={styles.right}>
          <InputDate
            labelText="Дата рождения"
            register={register("birth", {
              required: "Введите дату рождения",
            })}
            size="m"
            message={errors.birth?.message}
            setFormValue={setValue}
            name={"birth"}
          />
          <SelectField
            labelText="Регион"
            size="m"
            register={register("region", {
              required: "Выберите регион",
            })}
            list={regions}
            message={errors.region?.message}
            setFormValue={setValue}
            name={"region"}
          />
          <SelectField
            labelText="Населенный пункт"
            size="m"
            register={register("locality", {
              required: "Выберите населенный пункт",
            })}
            list={cities}
            message={errors.locality?.message}
            name={"locality"}
            setFormValue={setValue}
          />
          <ButtonsGroup
            options={options}
            label="Пол"
            setFormValue={setValue}
            name="sex"
          />
        </div>
      </div>
      <Htag size="xs" className={styles.title_opt}>
        Не обязательные поля
      </Htag>
      <div className={styles.optional}>
        <div className={styles.left}>
          <TextField
            labelText="Номер карты"
            size="m"
            register={register("card")}
          />
        </div>
        <div className={styles.right}>
          <TextField
            labelText="Телефон"
            size="m"
            register={register("phone")}
          />
        </div>
      </div>
      <Button
        accent="primary"
        decoration="default"
        size="l"
        type="submit"
        disabled={!isValid}
      >
        Продолжить
      </Button>
    </form>
  );
};
