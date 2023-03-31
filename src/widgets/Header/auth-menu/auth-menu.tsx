import { useAuth } from "store/auth/features";
import { LoginButton } from "./login-button/login-button";
import { UserMenu } from "./user-menu/user-menu";
import { Modal } from "ui";
import { AuthRegisterForm } from "widgets";
import { useModalsActions, useAuthModalState } from "store/modals/features";
import cn from "classnames";
import styles from "./auth-menu.module.sass";

interface AuthMenuProps {
  className?: string;
}

export const AuthMenu = ({ className }: AuthMenuProps) => {
  const [user] = useAuth();

  const { toggleAuth } = useModalsActions();
  const isOpen = useAuthModalState();

  return (
    <>
      <div className={cn(styles.wrapper, className)}>
        {!user ? (
          <LoginButton className={styles.login} />
        ) : (
          <UserMenu userName={user.surname} className={styles.menu} />
        )}
      </div>
      <Modal opened={isOpen} onClose={toggleAuth}>
        <AuthRegisterForm close={toggleAuth} />
      </Modal>
    </>
  );
};
