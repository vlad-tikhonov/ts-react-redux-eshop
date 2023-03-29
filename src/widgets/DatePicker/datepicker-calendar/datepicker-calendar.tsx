import { Dayjs } from "dayjs";
import cn from "classnames";
import { useMemo } from "react";
import styles from "./datepicker-calendar.module.sass";
import { getWeeks } from "widgets/datepicker/helpers/calendar";

interface DatePickerCalendarProps {
  currentDate: Dayjs;
  selectedDate: Dayjs;
  setSelectedDate: (d: Dayjs) => void;
}

const calendarHeaderData = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const DatePickerCalendar = ({
  currentDate,
  selectedDate,
  setSelectedDate,
}: DatePickerCalendarProps) => {
  const rows = useMemo(() => getWeeks(currentDate), [currentDate]);

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
            <div
              key={id}
              onClick={() => {
                setSelectedDate(value);
              }}
              className={cn(styles.cell, styles.dayCell, {
                [styles.dayCell_selected]:
                  value.dayOfYear() === selectedDate.dayOfYear(),
              })}
            >
              {text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
