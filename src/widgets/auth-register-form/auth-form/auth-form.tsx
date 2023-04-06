import { BorderLoader, Button, Htag } from "ui";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./auth-form.module.sass";
import toast from "react-hot-toast";
import { useAuth } from "store/auth/features/use-auth";
import { useAuthActions } from "store/auth/features";
import { WithMessage, InputText, InputPassword } from "components";

interface AuthFormProps {
  onLogin: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

const renderLoader = () => <BorderLoader accent="primary" />;

export const AuthForm = ({ onLogin }: AuthFormProps) => {
  const { signIn } = useAuthActions();
  const [, { isLoading }] = useAuth();

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
    }).then((res) => {
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
      <WithMessage message={errors.email?.message} className={styles.email}>
        <InputText
          label="Email"
          inputSize="l"
          type="email"
          {...register("email", { required: "Введите email" })}
        />
      </WithMessage>
      <WithMessage
        message={errors.password?.message}
        className={styles.password}
      >
        <InputPassword
          label="Пароль"
          inputSize="l"
          {...register("password", { required: "Введите пароль" })}
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
