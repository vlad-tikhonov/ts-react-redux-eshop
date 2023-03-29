import { Button } from "ui";
import { ReactComponent as LoginIcon } from "assets/icons/log-in.svg";
import { useModalsActions } from "store/modals/features";

const renderLoginIcon = (className: string) => (
  <LoginIcon className={className} />
);

interface LoginButtonProps {
  className?: string;
}

export const LoginButton = ({ className }: LoginButtonProps) => {
  const { toggleAuth } = useModalsActions();

  return (
    <Button
      accent="primary"
      decoration="default"
      size="m"
      renderRightIcon={renderLoginIcon}
      onClick={toggleAuth}
      className={className}
    >
      Войти
    </Button>
  );
};
