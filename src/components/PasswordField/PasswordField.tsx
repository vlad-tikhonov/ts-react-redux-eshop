import { TextField, TextFieldProps } from "ui";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "assets/icons/eye-off.svg";
import { useState } from "react";

type PasswordFieldProps = Omit<
  TextFieldProps,
  "type" | "renderRightIcon" | "renderLeftIcon"
>;

export const PasswordField = (props: PasswordFieldProps) => {
  const [showPass, setShowPass] = useState(false);

  const toggleShowPass = () => {
    setShowPass((x) => !x);
  };

  const renderEyeIcon = (className: string) => (
    <EyeIcon className={className} onClick={toggleShowPass} />
  );
  const renderEyeOffIcon = (className: string) => (
    <EyeOffIcon className={className} onClick={toggleShowPass} />
  );

  return (
    <TextField
      {...props}
      type={showPass ? "text" : "password"}
      renderRightIcon={showPass ? renderEyeOffIcon : renderEyeIcon}
    />
  );
};
