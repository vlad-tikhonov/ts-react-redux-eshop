import { Button } from "ui";
import { useState } from "react";
import { AuthForm, RegisterForm } from "modules/Auth";
import styles from "./AuthRegisterForm.module.sass";

interface AuthRegisterFormProps {
  open: () => void;
  close: () => void;
}

export const AuthRegisterForm = ({ open, close }: AuthRegisterFormProps) => {
  const [isShowRegister, setIsShowRegister] = useState(false);

  const toggleShowRegister = () => {
    setIsShowRegister((b) => !b);
  };

  return (
    <div className={styles.wrapper}>
      {isShowRegister ? <RegisterForm /> : <AuthForm onLogin={close} />}
      <Button
        size="s"
        accent="secondary"
        decoration="outline"
        onClick={toggleShowRegister}
        className={styles.btn}
      >
        {isShowRegister ? "Вход" : "Регистрация"}
      </Button>
    </div>
  );
};
