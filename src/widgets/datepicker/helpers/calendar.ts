import { Dayjs } from 'dayjs'
import dayjs from 'app/dayjs'

export const changeDateMonth = (date: Dayjs, isNextMonth: boolean) => {
  if (date.month() === 0 && !isNextMonth) {
    return date.set('year', date.year() - 1).set('month', 11)
  }

  if (date.month() === 11 && isNextMonth) {
    return date.set('year', date.year() + 1).set('month', 0)
  }

  return date.add(isNextMonth ? 1 : -1, 'month')
}

export const changeDateYear = (date: Dayjs, isNextMonth: boolean) => {
  return isNextMonth
    ? date.set('year', date.year() - 1)
    : date.set('year', date.year() + 1)
}

export const getWeeks = (date: Dayjs) => {
	const prepareCell = (date: Dayjs) => {
		return {
			text: date.get('date'),
			value: date,
			id: dayjs().unix() * Math.random(),
		}
	}

	const constructWeeks = (date: Dayjs) => {
		const firstDayOfMonth = date.utcOffset(0).startOf("month")
		const start = firstDayOfMonth.day()

		let current = firstDayOfMonth.clone()
		const weeks = []

		for (let i = 0; i < 5; i++){
			const week = []
			for (let j = 0; j < 7; j++) {
				if(i === 0 && (j + 1) < start) {
					let diff = start - (j + 1)
					week.push(prepareCell(current.subtract(diff, 'day')))
					continue;
				} else {
					week.push(prepareCell(current))
				}
				current = current.add(1, 'day')
			}

			weeks.push(week)
		}

		return weeks
	}

	return constructWeeks(date)
}
