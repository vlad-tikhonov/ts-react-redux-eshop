import cn from "classnames";
import { Text, Button } from "ui";
import { Dayjs } from "dayjs";
import { ReactComponent as ChevronLeftIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "assets/icons/chevron-right.svg";
import styles from "./DatePickerSelector.module.sass";
import { changeDateMonth, getWeeks } from "widgets/DatePicker/helpers/calendar";

interface DatePickerSelectorProps {
  currentDate: Dayjs;
  setCurrentDate: (d: Dayjs) => void;
}

const renderChevronLeft = (className: string) => (
  <ChevronLeftIcon className={className} />
);

const renderChevronRight = (className: string) => (
  <ChevronRightIcon className={className} />
);

export const DatePickerSelector = ({
  currentDate,
  setCurrentDate,
}: DatePickerSelectorProps) => {
  const changeMonth = (isNextMonth: boolean) => {
    return () => {
      setCurrentDate(changeDateMonth(currentDate, isNextMonth));
    };
  };

  return (
    <div className={styles.selector}>
      <div className={styles.date}>
        <Text size="m" bold>
          {currentDate.format("MMMM YYYY")}
        </Text>
      </div>
      <div className={styles.icons}>
        <div className={cn(styles.icon, styles.iconLeft)}>
          <Button
            size="s"
            accent="grayscale"
            decoration="default"
            onClick={changeMonth(false)}
            renderLeftIcon={renderChevronLeft}
          />
        </div>
        <div className={cn(styles.icon, styles.iconRight)}>
          <Button
            size="s"
            accent="grayscale"
            decoration="default"
            onClick={changeMonth(true)}
            renderLeftIcon={renderChevronRight}
          />
        </div>
      </div>
    </div>
  );
};
