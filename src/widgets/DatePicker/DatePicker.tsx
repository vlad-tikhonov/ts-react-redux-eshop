import styles from "./DatePicker.module.sass";
import { Dayjs } from "dayjs";
import { DatePickerCalendar, DatePickerSelector } from "./components";
import cn from "classnames";
interface DatePickerProps {
  selectedDate: Dayjs;
  currentDate: Dayjs;
  setSelectedDate: (d: Dayjs) => void;
  setCurrentDate: (d: Dayjs) => void;
  className?: string;
}

export const DatePicker = ({
  selectedDate,
  currentDate,
  setCurrentDate,
  setSelectedDate,
  className,
}: DatePickerProps) => {
  return (
    <div className={cn(styles.datepicker, className)}>
      <DatePickerSelector
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <DatePickerCalendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};
