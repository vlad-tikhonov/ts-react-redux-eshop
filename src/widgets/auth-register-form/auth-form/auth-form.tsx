import { BorderLoader, Button, Htag } from "ui";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./auth-form.module.sass";
import { useAuth } from "store/auth/features/use-auth";
import { useAuthActions } from "store/auth/features";
import { WithMessage, InputText, InputPassword } from "components";
import { toastSuccess, toastFailure } from "events-bus";
import { useEffect } from "react";
import { LOGIN_SUCCESS, FORM_FIELDS } from "./constants";
interface AuthFormProps {
  onLogin: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

const renderLoader = () => <BorderLoader accent="primary" />;

export const AuthForm = ({ onLogin }: AuthFormProps) => {
  const { signIn, resetAuthErrors } = useAuthActions();
  const [user, { isLoading, errors: authErrors }] = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signIn({
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    if (!user) return;
    toastSuccess.broadcast([LOGIN_SUCCESS]);
    onLogin();
  }, [user, onLogin]);

  useEffect(() => {
    if (!authErrors.length) return;
    toastFailure.broadcast(authErrors);
    resetAuthErrors();
  }, [authErrors, resetAuthErrors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Htag size="s" className={styles.title}>
        Вход
      </Htag>
      <WithMessage message={errors.email?.message} className={styles.email}>
        <InputText
          label="Email"
          inputSize="l"
          type="email"
          {...register("email", {
            required: FORM_FIELDS.email.requiredMessage,
          })}
        />
      </WithMessage>
      <WithMessage
        message={errors.password?.message}
        className={styles.password}
      >
        <InputPassword
          label="Пароль"
          inputSize="l"
          {...register("password", {
            required: FORM_FIELDS.password.requiredMessage,
          })}
        />
      </WithMessage>
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
