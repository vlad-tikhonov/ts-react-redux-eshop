import { Container } from "layouts";
import styles from "./Test.module.sass";
import { Button } from "components";
import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

export const Test = () => {
  return (
    <Container>
      <div className={styles.test}>Test</div>
    </Container>
  );
};
