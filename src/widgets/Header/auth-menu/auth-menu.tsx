import { useAuth } from "store/auth/features";
import { LoginButton } from "./login-button/login-button";
import { UserMenu } from "./user-menu/user-menu";
import { Modal } from "ui";
import { AuthRegisterForm } from "widgets";
import { useModalsActions, useAuthModalState } from "store/modals/features";

export const AuthMenu = () => {
  const [user] = useAuth();

  const { toggleAuth } = useModalsActions();
  const isOpen = useAuthModalState();

  return (
    <>
      {!user ? (
        <LoginButton />
      ) : (
        <UserMenu userName={user.name} userSurname={user.surname} />
      )}
      <Modal opened={isOpen} onClose={toggleAuth}>
        <AuthRegisterForm close={toggleAuth} />
      </Modal>
    </>
  );
};
