import { Container, Wrapper } from "layouts";
import styles from "./Test.module.sass";
import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { Button } from "ui";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

export const Test = () => {
  return (
    <Wrapper>
      <Container>
        <div className={styles.test}>
          <div>
            <Button accent="secondary" size="m" decoration="default" disabled>
              Каталог
            </Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
