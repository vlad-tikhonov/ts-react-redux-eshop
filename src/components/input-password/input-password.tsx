import { useState } from "react";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "assets/icons/eye-off.svg";
import { InputText, InputTextProps } from "components";
import cn from "classnames";
import styles from "./input-password.module.sass";

interface InputPasswordProps extends InputTextProps {}

export const InputPassword = (props: InputPasswordProps) => {
  const [showPass, setShowPass] = useState(false);

  const toggleShowPass = () => {
    setShowPass((x) => !x);
  };

  const renderIcon = (className: string) => {
    const iconClasses = cn(styles.icon, className);

    if (showPass) {
      return <EyeOffIcon className={iconClasses} onClick={toggleShowPass} />;
    }
    return <EyeIcon className={iconClasses} onClick={toggleShowPass} />;
  };

  const modifiedProps = {
    ...props,
    type: showPass ? "text" : "password",
    renderRightIcon: renderIcon,
  };

  return <InputText {...modifiedProps} />;
};
