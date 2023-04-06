import { useState } from "react";
import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "assets/icons/eye-off.svg";
import { InputText, InputTextProps } from "components";
import { forwardRef } from "react";

interface InputPasswordProps extends InputTextProps {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  (props, ref) => {
    const [showPass, setShowPass] = useState(false);

    const toggleShowPass = () => {
      setShowPass((x) => !x);
    };

    const renderIcon = (className: string) => {
      if (showPass) {
        return <EyeOffIcon className={className} onClick={toggleShowPass} />;
      }
      return <EyeIcon className={className} onClick={toggleShowPass} />;
    };

    const modifiedProps = {
      ...props,
      type: showPass ? "text" : "password",
      renderRightIcon: renderIcon,
    };

    return <InputText ref={ref} {...modifiedProps} />;
  }
);
