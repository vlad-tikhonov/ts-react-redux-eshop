import { Button, Htag } from "ui";
import { TextField } from "ui";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AuthForm.module.sass";
import { useAppDispatch } from "app/hooks";
import { login } from "features/auth/auth-slice";
import { PasswordField } from "components";
import { useAuth } from "features/auth/use-auth";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

interface AuthFormProps {
  onLogin: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

export const AuthForm = ({ onLogin }: AuthFormProps) => {
  const dispatch = useAppDispatch();
  const [user, { isLoading, errors: authErrors }] = useAuth();

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
    ).then((res) => {
      const status = res.meta.requestStatus;
      if (status === "fulfilled") {
        onLogin();
        toast.success("Вход успешно выполнен");
      } else if (status === "rejected") {
        authErrors.forEach((m) => {
          toast.error(m);
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Htag size="s" className={styles.title}>
        Вход
      </Htag>
      <TextField
        labelText="E-mail"
        size="l"
        type="email"
        register={register("email", {
          required: "Пожалуйста, введите email",
        })}
        message={errors.email?.message}
        className={styles.email}
      />
      <PasswordField
        labelText="Пароль"
        size="l"
        register={register("password", {
          required: "Пожалуйста, введите пароль",
        })}
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
