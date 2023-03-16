import { Container, Wrapper } from "layouts";
import styles from "./Test.module.sass";
import { ReactComponent as LeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as RightIcon } from "assets/icons/chevron-right.svg";
import { InputDate, SelectField } from "components";

const renderLeftIcon = (className: string) => (
  <LeftIcon className={className} />
);

const renderRightIcon = (className: string) => (
  <RightIcon className={className} />
);

const list = [
  "Республика Башкортостан",
  "Удмуртская республика",
  "Москва",
  "Санткт-Петербург",
];

const options = [
  {
    value: "1",
    label: "Мужской",
    checked: true,
    id: "1",
  },
  {
    value: "1",
    label: "Женский",
    checked: false,
    id: "2",
  },
];

export const Test = () => {
  return (
    <Wrapper>
      <Container>
        <div className={styles.test}>
          <div>
            <InputDate size="m" message="" labelText="дд.мм.гггг" />
          </div>
          <div>
            <SelectField labelText="Регион" message="" size="m" list={list} />
          </div>
          <div>
            <SelectField labelText="Регион" message="" size="l" list={list} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};
