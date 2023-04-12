import { ChangeEvent, useRef, useState, forwardRef, useCallback } from "react";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { DatePicker } from "widgets";
import dayjs from "app/dayjs";
import { Dayjs } from "dayjs";
import cn from "classnames";
import { useClickOutside } from "hooks";
import { DATE_REGEXP } from "constants/date-regexp";
import { InputText, InputTextProps } from "components";
import styles from "./input-date.module.sass";

interface InputDateProps extends InputTextProps {}

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
  (props, ref) => {
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
      const newValue = date.format("DD.MM.YYYY");
      setInputValue(newValue);
      setSelectedDate(date);
      setIsShowDatePicker(false);
    };

    const handleSetCurrentDate = (date: Dayjs) => {
      setCurrentDate(date);
    };

    const toggleShowDatePicker = () => {
      setIsShowDatePicker((x) => !x);
    };

    const hideDatePicker = useCallback(() => {
      setIsShowDatePicker(false);
    }, []);

    const renderCalendarIcon = (className: string) => (
      <CalendarIcon className={className} onClick={toggleShowDatePicker} />
    );

    useClickOutside(wrapperRef, hideDatePicker, isShowDatePicker);

    return (
      <div className={styles.wrapper} ref={wrapperRef}>
        <InputText
          placeholder="дд.мм.гггг"
          renderRightIcon={renderCalendarIcon}
          value={inputValue}
          onChange={onChange}
          {...props}
        />
        {isShowDatePicker && (
          <DatePicker
            selectedDate={selectedDate}
            currentDate={currentDate}
            setCurrentDate={handleSetCurrentDate}
            setSelectedDate={handleSetSelectedDate}
            className={cn({
              [styles.datepicker]: true,
              [styles.datepicker_l]: props.inputSize === "l",
            })}
          />
        )}
      </div>
    );
  }
);
