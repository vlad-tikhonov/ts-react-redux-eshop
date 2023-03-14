import { UseFormRegisterReturn } from "react-hook-form";
import { ElementSizes } from "types";
import { TextField } from "ui";
import { ChangeEvent, useRef, useState } from "react";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { DatePicker } from "widgets";
import dayjs from "app/dayjs";
import { Dayjs } from "dayjs";
import styles from "./InputDate.module.sass";
import cn from "classnames";
import { useClickOutside } from "hooks";
import { DATE_REGEXP } from "constants/date-regexp";

interface InputDateProps {
  labelText: string;
  size: Extract<ElementSizes, "l" | "m">;
  message: string;
  placeholder?: string;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
}

export const InputDate = ({
  size,
  labelText,
  disabled,
  message,
  register,
}: InputDateProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const validateDate = (value: string) => DATE_REGEXP.test(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = validateDate(value);

    if (isValid) {
      const dateArr = value.split(".").map((el) => Number(el));
      const newDate = dayjs(new Date(dateArr[2], dateArr[1] - 1, dateArr[0]));
      setSelectedDate(dayjs(newDate));
      setCurrentDate(dayjs(newDate));
    }

    setInputValue(value);
  };

  const handleSetSelectedDate = (date: Dayjs) => {
    setInputValue(date.format("DD.MM.YYYY"));
    setSelectedDate(date);
  };

  const handleSetCurrentDate = (date: Dayjs) => {
    setCurrentDate(date);
  };

  const toggleShowDatePicker = () => {
    setIsShowDatePicker((x) => !x);
  };

  const renderCalendarIcon = (className: string) => (
    <CalendarIcon className={className} onClick={toggleShowDatePicker} />
  );

  useClickOutside(wrapperRef, () => {
    setIsShowDatePicker(false);
  });

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <TextField
        size={size}
        labelText={labelText}
        disabled={disabled}
        placeholder="дд.мм.гггг"
        message={message}
        renderRightIcon={renderCalendarIcon}
        register={register}
        onChange={onChange}
        value={inputValue}
      />
      {isShowDatePicker && (
        <DatePicker
          selectedDate={selectedDate}
          currentDate={currentDate}
          setCurrentDate={handleSetCurrentDate}
          setSelectedDate={handleSetSelectedDate}
          className={cn({
            [styles.datepicker]: true,
            [styles.datepicker_l]: size === "l",
          })}
        />
      )}
    </div>
  );
};
