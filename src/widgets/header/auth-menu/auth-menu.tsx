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
  const { closeAuth } = useModalsActions();
  const isOpen = useAuthModalState();
  return (
    <>
      <div className={cn(styles.wrapper, className)}>
        {!user ? (
          <LoginButton className={styles.login} />
        ) : (
          <UserMenu userName={user.name} className={styles.menu} />
        )}
      </div>
      <Modal opened={isOpen} onClose={closeAuth}>
        <AuthRegisterForm onClose={closeAuth} />
      </Modal>
    </>
  );
};
