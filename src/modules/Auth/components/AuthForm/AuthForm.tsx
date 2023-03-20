import { BorderLoader, Button, Htag, TextField } from "ui";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AuthForm.module.sass";
import { useAppDispatch } from "app/hooks";
import { login } from "features/auth/auth-slice";
import { PasswordField } from "components";
import toast from "react-hot-toast";
import { useAuth } from "features/auth/use-auth";

interface AuthFormProps {
  onLogin: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

const renderLoader = () => <BorderLoader accent="primary" />;

export const AuthForm = ({ onLogin }: AuthFormProps) => {
  const dispatch = useAppDispatch();
  const [, { isLoading }] = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      login({
        email: data.email,
        password: data.password,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        onLogin();
        toast.success("Вход успешно выполнен", { duration: 5000 });
      }

      if (Array.isArray(res.payload)) {
        res.payload.forEach((m) => {
          toast.error(m, { duration: 5000 });
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
          required: "Введите email",
        })}
        message={errors.email?.message}
        className={styles.email}
      />
      <PasswordField
        labelText="Пароль"
        size="l"
        register={register("password", {
          required: "Введите пароль",
          minLength: {
            value: 4,
            message: "Минимальная длинна пароля 4 символа",
          },
        })}
        message={errors.password?.message}
        className={styles.password}
      />
      <Button
        accent="primary"
        decoration="default"
        size="l"
        type="submit"
        renderRightIcon={isLoading ? renderLoader : undefined}
        disabled={isLoading}
      >
        Вход
      </Button>
    </form>
  );
};
