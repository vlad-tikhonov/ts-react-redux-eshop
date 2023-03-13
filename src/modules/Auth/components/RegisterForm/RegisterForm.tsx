import styles from "./RegisterForm.module.sass";
import { Htag, TextField, Button } from "ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { DatePicker } from "widgets";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "assets/icons/eye-off.svg";

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

export const RegisterForm = ({}: RegisterFormProps) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setConfirm] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const toggleShowPass = () => {
    setShowPass((b) => !b);
  };

  const toggleConfirmPass = () => {
    setConfirm((b) => !b);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const getEyeRender =
    (fieldName: "password" | "confirm") => (className: string) =>
      (
        <EyeIcon
          className={className}
          onClick={
            fieldName === "password" ? toggleShowPass : toggleConfirmPass
          }
        />
      );

  const getEyeOffRender =
    (fieldName: "password" | "confirm") => (className: string) =>
      (
        <EyeOffIcon
          className={className}
          onClick={
            fieldName === "password" ? toggleShowPass : toggleConfirmPass
          }
        />
      );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
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
          <TextField
            labelText="Пароль"
            size="m"
            type={showPass ? "text" : "password"}
            register={register("password")}
            renderRightIcon={
              showPass ? getEyeOffRender("password") : getEyeRender("password")
            }
          />
          <TextField
            labelText="Повторите пароль"
            size="m"
            type={showConfirm ? "text" : "password"}
            register={register("confirm")}
            renderRightIcon={
              showConfirm ? getEyeOffRender("confirm") : getEyeRender("confirm")
            }
          />
        </div>
        <div className={styles.right}>
          <DatePicker
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
