import { useState, useMemo } from "react";
import { TextField } from "ui";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import { ElementSizes } from "types";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./DatePicker.module.sass";
import dayjs, { Dayjs } from "dayjs";
import { getWeeks } from "helpers/calendar";
import cn from "classnames";

interface DatePickerProps {
  labelText: string;
  size: Extract<ElementSizes, "l" | "m">;
  message: string;
  placeholder?: string;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
}

interface DatePickerCalendarProps {
  date: Dayjs;
}

const calendarHeaderData = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const DatePickerCalendar = ({ date }: DatePickerCalendarProps) => {
  const rows = useMemo(() => getWeeks(date), [date]);
  console.log(rows);
  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        {calendarHeaderData.map((el, i) => (
          <div key={i} className={cn(styles.cell, styles.header_cell)}>
            {el}
          </div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} className={styles.row}>
          {row.map(({ text, value, id }) => (
            <div key={id} className={cn(styles.cell, styles.dayCell)}>
              {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const renderCalendarIcon = (className: string) => (
  <CalendarIcon className={className} />
);

export const DatePicker = ({
  size,
  labelText,
  disabled,
  placeholder,
  message,
  register,
}: DatePickerProps) => {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(dayjs());

  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <TextField
        size={size}
        labelText={labelText}
        disabled={disabled}
        placeholder="дд.мм.гггг"
        message={message}
        renderRightIcon={renderCalendarIcon}
        register={register}
        onChange={onChange}
        value={value}
      />
      <DatePickerCalendar date={date} />
    </>
  );
};
