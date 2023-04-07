import styles from "./register-form.module.sass";
import { Htag, Button, BorderLoader } from "ui";
import { InputDate, ButtonsGroup, InputPassword, Select } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputText, WithMessage } from "components";
import { Sex, Option } from "types";
import cn from "classnames";
import toast from "react-hot-toast";
import { useRegister } from "store/register/features";
import { REGIONS } from "constants/regions";
import { LOCALITIES } from "constants/localities";
import { useRegisterActions } from "store/register/features";

interface RegisterFormProps {
  onRegister: () => void;
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
  card: string;
  phone: string;
}

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

const renderLoader = () => <BorderLoader accent="primary" />;

export const RegisterForm = ({ onRegister, className }: RegisterFormProps) => {
  const { register: registerUser } = useRegisterActions();
  const [, { isLoading }] = useRegister();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    trigger,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    registerUser({
      login: data.email,
      password: data.password,
      birthDate: data.birth.split(".").reverse().join("-"),
      name: data.name || data.email,
      surname: data.surname,
      sex: data.sex,
      region: data.region,
      locality: data.locality,
      phone: data.phone,
      card: data.card,
    }).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        onRegister();
        toast.success("Регистрация прошла успешно. Выполните вход", {
          duration: 5000,
        });
      }

      if (Array.isArray(res.payload)) {
        res.payload.forEach((m) => {
          toast.error(m, { duration: 5000 });
        });
      }
    });
  };

  register("sex", {
    required: "Выберите пол",
  });
  register("locality", {
    required: "Выберите населенный пункт",
  });
  register("region", {
    required: "Выберите регион",
  });

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
          <WithMessage message={errors.email?.message}>
            <InputText
              inputSize="m"
              label="E-mail"
              type="email"
              className={styles.field}
              {...register("email", {
                required: "Введите email",
              })}
            />
          </WithMessage>
          <WithMessage message={errors.surname?.message}>
            <InputText
              inputSize="m"
              label="Фамилия"
              type="text"
              className={styles.field}
              {...register("surname", { required: "Введите фамилию" })}
            />
          </WithMessage>
          <WithMessage message={errors.name?.message}>
            <InputText
              inputSize="m"
              label="Имя"
              type="text"
              className={styles.field}
              {...register("name", { required: "Введите имя" })}
            />
          </WithMessage>
          <WithMessage message={errors.password?.message}>
            <InputPassword
              label="Пароль"
              inputSize="m"
              className={styles.field}
              {...register("password", {
                required: "Введите пароль",
                minLength: {
                  value: 4,
                  message: "Минимальная длинна пароля 4 символа",
                },
              })}
            />
          </WithMessage>
          <WithMessage message={errors.confirm?.message}>
            <InputPassword
              label="Пароль"
              inputSize="m"
              className={styles.field}
              {...register("confirm", {
                required: "Введите пароль",
                validate: (value) =>
                  value === getValues("password") || "Пароли не совпадают",
              })}
            />
          </WithMessage>
        </div>
        <div className={styles.right}>
          <WithMessage message={errors.birth?.message}>
            <InputDate
              label="Дата рождения"
              inputSize="m"
              className={styles.field}
              {...register("birth", {
                required: "Введите дату рождения",
              })}
            />
          </WithMessage>
          <WithMessage message={errors.region?.message}>
            <Select
              options={REGIONS}
              label="Регион"
              className={styles.field}
              onChange={(value: string) => {
                setValue("region", value);
                trigger("region");
              }}
            />
          </WithMessage>
          <WithMessage message={errors.locality?.message}>
            <Select
              options={LOCALITIES}
              label="Населенный пункт"
              className={styles.field}
              onChange={(value: string) => {
                setValue("locality", value);
                trigger("locality");
              }}
            />
          </WithMessage>
          <WithMessage message={errors.sex?.message}>
            <ButtonsGroup
              options={options}
              label="Пол"
              onChange={(value) => {
                setValue("sex", String(value));
                trigger("sex");
              }}
            />
          </WithMessage>
        </div>
      </div>
      <Htag size="xs" className={styles.title_opt}>
        Не обязательные поля
      </Htag>
      <div className={styles.optional}>
        <div className={styles.left}>
          <InputText
            inputSize="m"
            label="Номер карты"
            type="text"
            className={styles.field}
            {...register("card")}
          />
        </div>
        <div className={styles.right}>
          <InputText
            inputSize="m"
            label="Телефон"
            type="text"
            className={styles.field}
            {...register("phone")}
          />
        </div>
      </div>
      <Button
        accent="primary"
        decoration="default"
        size="l"
        type="submit"
        renderRightIcon={isLoading ? renderLoader : undefined}
        disabled={isLoading}
        className={styles.submit}
      >
        Продолжить
      </Button>
    </form>
  );
};
