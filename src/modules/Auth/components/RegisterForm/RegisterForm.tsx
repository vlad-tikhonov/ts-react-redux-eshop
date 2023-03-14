import styles from "./RegisterForm.module.sass";
import { Htag, TextField, Button, InputDate } from "ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordField } from "widgets";
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

export const RegisterForm = ({ className }: RegisterFormProps) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

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
            register={register("email")}
            type="email"
          />
          <TextField
            labelText="Фамилия"
            size="m"
            register={register("surname")}
          />
          <TextField labelText="Имя" size="m" register={register("name")} />
          <PasswordField
            labelText="Пароль"
            size="m"
            register={register("password")}
          />
          <PasswordField
            labelText="Повторите пароль"
            size="m"
            register={register("confirm")}
          />
        </div>
        <div className={styles.right}>
          <InputDate
            labelText="Дата рождения"
            message=""
            register={register("birth")}
            size="m"
          />
          <TextField
            labelText="Регион"
            size="m"
            register={register("region")}
          />
          <TextField
            labelText="Населенный пункт"
            size="m"
            register={register("locality")}
          />
          <TextField labelText="Пол" size="m" register={register("sex")} />
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
            placeholder=""
          />
        </div>
        <div className={styles.right}>
          <TextField
            labelText="Телефон"
            size="m"
            register={register("phone")}
            placeholder=""
          />
        </div>
      </div>
      <Button accent="primary" decoration="default" size="l" type="submit">
        Продолжить
      </Button>
    </form>
  );
};
