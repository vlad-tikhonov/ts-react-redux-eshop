import { Button } from "ui";
import { useState, useRef } from "react";
import { AuthForm } from "./auth-form/auth-form";
import { RegisterForm } from "./register-form/register-form";
import styles from "./auth-register-form.module.sass";
import animationStyles from "./animation.module.sass";
import { SwitchTransition, CSSTransition } from "react-transition-group";

interface AuthRegisterFormProps {
  close: () => void;
}

const formAnimation = {
  enter: animationStyles["form-enter"],
  enterActive: animationStyles["form-enter-active"],
  exit: animationStyles["form-exit"],
  exitActive: animationStyles["form-exit-active"],
};

export const AuthRegisterForm = ({ close }: AuthRegisterFormProps) => {
  const [isShowRegister, setIsShowRegister] = useState(false);
  const helloRef = useRef<HTMLDivElement>(null);
  const goodbyeRef = useRef<HTMLDivElement>(null);
  const nodeRef = isShowRegister ? helloRef : goodbyeRef;

  const toggleShowRegister = () => {
    setIsShowRegister((b) => !b);
  };

  return (
    <div className={styles.wrapper}>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={isShowRegister ? "Goodbye, world!" : "Hello, world!"}
          addEndListener={(node: HTMLElement, done: () => void) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={formAnimation}
        >
          <div ref={nodeRef}>
            {isShowRegister ? (
              <RegisterForm onRegister={close} />
            ) : (
              <AuthForm onLogin={close} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
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
