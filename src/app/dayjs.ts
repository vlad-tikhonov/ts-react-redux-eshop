import "dayjs/locale/ru";
import dayOfYear from "dayjs/plugin/dayOfYear";
import utc from "dayjs/plugin/utc";
import dayjs from 'dayjs'

dayjs.extend(dayOfYear);
dayjs.extend(utc);
dayjs.locale("ru");

export default dayjs