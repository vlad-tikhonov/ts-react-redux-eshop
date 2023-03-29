import { Button } from "ui";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";
import { useModalsActions } from "store/modals/features";

const renderLoginIcon = (className: string) => (
  <LoginIcon className={className} />
);

export const LoginButton = () => {
  const { toggleAuth } = useModalsActions();

  return (
    <Button
      accent="primary"
      decoration="default"
      size="m"
      renderRightIcon={renderLoginIcon}
      onClick={toggleAuth}
    >
      Войти
    </Button>
  );
};
