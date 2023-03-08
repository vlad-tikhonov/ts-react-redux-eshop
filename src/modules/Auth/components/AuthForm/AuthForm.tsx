import { Button, Htag } from "ui";
import { TextField } from "ui";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AuthForm.module.sass";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "assets/icons/eye-off.svg";
import { useState } from "react";
import { useAppDispatch } from "app/hooks";
import { login } from "features/auth/auth-slice";

interface AuthFormProps {
  onLogin: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

export const AuthForm = ({ onLogin }: AuthFormProps) => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      login({
        email: data.email,
        password: data.password,
      })
    ).then(() => {
      onLogin();
    });
  };

  const toggleShowPass = () => {
    setShowPass((b) => !b);
  };

  const EyeRenderIcon = (className: string) => (
    <EyeIcon className={className} onClick={toggleShowPass} />
  );

  const EyeOffRenderIcon = (className: string) => (
    <EyeOffIcon className={className} onClick={toggleShowPass} />
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Htag size="s" className={styles.title}>
        Вход
      </Htag>
      <TextField
        labelText="E-mail"
        size="l"
        placeholder=""
        type="email"
        register={register("email", {
          required: "Пожалуйста, введите email",
        })}
        message={errors.email?.message}
        className={styles.email}
      />

      <TextField
        labelText="Пароль"
        size="l"
        placeholder=""
        register={register("password", {
          required: "Пожалуйста, введите пароль",
        })}
        type={showPass ? "text" : "password"}
        renderRightIcon={showPass ? EyeOffRenderIcon : EyeRenderIcon}
        message={errors.password?.message}
        className={styles.password}
      />
      <Button
        accent="primary"
        decoration="default"
        size="l"
        type="submit"
        disabled={!isValid}
      >
        Вход
      </Button>
    </form>
  );
};
