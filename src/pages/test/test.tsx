import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { Input } from "ui";
import { InputText } from "components";
import styles from "./test.module.sass";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

export const Test = () => {
  return (
    <div className={styles.test}>
      <div className={styles.row}>
        {/* <InputDate size="m" message="" labelText="дд.мм.гггг" /> */}
        <Input inputSize="m" />
      </div>
      <div className={styles.row}>
        {/* <InputDate size="m" message="" labelText="дд.мм.гггг" /> */}
        <Input inputSize="l" />
      </div>

      <div className={styles.row}>
        <InputText inputSize="m" disabled />
      </div>
      <div className={styles.row}>
        <InputText inputSize="l" disabled />
      </div>
      <div className={styles.row}>
        <InputText inputSize="m" label="Label" disabled />
      </div>
      <div className={styles.row}>
        <InputText inputSize="l" label="Label" disabled />
      </div>
      <div className={styles.row}>
        <InputText
          inputSize="m"
          label="Label"
          renderLeftIcon={renderLeftIcon}
          renderRightIcon={renderRightIcon}
          disabled
        />
      </div>
      <div className={styles.row}>
        <InputText
          inputSize="l"
          label="Label"
          renderLeftIcon={renderLeftIcon}
          renderRightIcon={renderRightIcon}
          disabled
        />
      </div>
    </div>
  );
};
