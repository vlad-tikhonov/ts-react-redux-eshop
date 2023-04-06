import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { InputSelect } from "components";
import styles from "./test.module.sass";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

const options = [
  "option 1option1option",
  "option 2option1option",
  "option 3option1option",
];

export const Test = () => {
  return (
    <div className={styles.test}>
      <div className={styles.row}>
        <InputSelect label="Label" options={options} />
      </div>
    </div>
  );
};
