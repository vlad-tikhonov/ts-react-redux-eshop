import styles from "./register-form.module.sass";
import { Htag, Button, BorderLoader } from "ui";
import { InputDate, ButtonsGroup, InputPassword, Select } from "components";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { InputText, WithMessage } from "components";
import { Sex, Option } from "types";
import { useRegister } from "store/register/features";
import { REGIONS } from "constants/regions";
import { LOCALITIES } from "constants/localities";
import { useEffect } from "react";
import { toastSuccess, toastFailure } from "events-bus";
import { useRegisterActions } from "store/register/features";
import { REGISTER_SUCCESS, FORM_FIELDS } from "./constants";
import cn from "classnames";
import { DATE_REGEXP } from "constants/date-regexp";

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

const sexOptions: [Option, Option] = [
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
  const {
    register: registerUser,
    resetRegisterErrors,
    resetRegisterState,
  } = useRegisterActions();
  const [user, { isLoading, errors: registerErrors }] = useRegister();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    trigger,
    control,
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const {
    field: { onChange: onChangeBirth },
  } = useController({
    name: "birth",
    rules: {
      required: FORM_FIELDS.birth.requiredMessage,
      validate: (value: string) =>
        DATE_REGEXP.test(value) || FORM_FIELDS.birth.validateMessage,
    },
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    registerUser({
      login: data.email,
      password: data.password,
      birthDate: data.birth.split(".").reverse().join("-"),
      name: data.name || data.email,
      surname: data.surname,
      sex: parseInt(data.sex),
      region: data.region,
      locality: data.locality,
      phone: data.phone,
      card: data.card,
    });
  };

  register("sex", {
    required: FORM_FIELDS.sex.requiredMessage,
  });
  register("locality", {
    required: FORM_FIELDS.locality.requiredMessage,
  });
  register("region", {
    required: FORM_FIELDS.region.requiredMessage,
  });

  useEffect(() => {
    if (!user) return;
    toastSuccess.broadcast([REGISTER_SUCCESS]);
    onRegister();
    resetRegisterState();
  }, [user, onRegister, resetRegisterState]);

  useEffect(() => {
    if (!registerErrors.length) return;
    toastFailure.broadcast(registerErrors);
    resetRegisterErrors();
  }, [registerErrors, resetRegisterErrors]);

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
                required: FORM_FIELDS.email.requiredMessage,
              })}
            />
          </WithMessage>
          <WithMessage message={errors.surname?.message}>
            <InputText
              inputSize="m"
              label="Фамилия"
              type="text"
              className={styles.field}
              {...register("surname", {
                required: FORM_FIELDS.surname.requiredMessage,
              })}
            />
          </WithMessage>
          <WithMessage message={errors.name?.message}>
            <InputText
              inputSize="m"
              label="Имя"
              type="text"
              className={styles.field}
              {...register("name", {
                required: FORM_FIELDS.name.requiredMessage,
              })}
            />
          </WithMessage>
          <WithMessage message={errors.password?.message}>
            <InputPassword
              label="Пароль"
              inputSize="m"
              className={styles.field}
              {...register("password", {
                required: FORM_FIELDS.password.requiredMessage,
                minLength: {
                  value: 4,
                  message: FORM_FIELDS.password.minLengthMessage,
                },
              })}
            />
          </WithMessage>
          <WithMessage message={errors.confirm?.message}>
            <InputPassword
              label="Повторите пароль"
              inputSize="m"
              className={styles.field}
              {...register("confirm", {
                required: FORM_FIELDS.confirm.requiredMessage,
                validate: (value) =>
                  value === getValues("password") ||
                  FORM_FIELDS.confirm.validateMessage,
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
              onChangeDate={onChangeBirth}
            />
          </WithMessage>
          <WithMessage message={errors.region?.message}>
            <Select
              options={REGIONS}
              label="Регион"
              className={styles.field}
              onChange={(value) => {
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
              onChange={(value) => {
                setValue("locality", value);
                trigger("locality");
              }}
            />
          </WithMessage>
          <WithMessage message={errors.sex?.message}>
            <ButtonsGroup
              options={sexOptions}
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
