import dayjs, { Dayjs } from 'dayjs'
// export const changeDateMonth = (date, isNextMonth) => {
//   if (date.month() === 0 && !isNextMonth) {
//     return date.set('year', date.year() - 1).set('month', 11)
//   }

//   if (date.month() === 11 && isNextMonth) {
//     return date.set('year', date.year() + 1).set('month', 0)
//   }

//   return date.add(isNextMonth ? 1 : -1, 'month')
// }

// export const changeDateYear = (date, isNextMonth) => {
//   return isNextMonth
//     ? date.set('year', date.year() - 1)
//     : date.set('year', date.year() + 1)
// }

export const getWeeks = (date: Dayjs) => {
	const prepareCell = (date: Dayjs) => {
		return {
			text: date.get('date'),
			value: date,
			id: dayjs().unix(),
		}
	}

	const constructWeeks = (date: Dayjs) => {
		const firstDayOfMonth = date.startOf("month")
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

const getCalendarCells = (date: Dayjs) => {
  const daysArray = new Array(date.daysInMonth()).fill(1)
  const calendarCells = []

  const prepareCell = (date: Dayjs, dayNumber: number) => {
    return {
      text: String(dayNumber),
      value: date.clone().set('date', dayNumber),
    }
  }
  daysArray.forEach((_, i) => {
    calendarCells.push(prepareCell(date, i + 1))
  })

  const cellsToAdd = 35 - daysArray.length

  const lastMonth = date.subtract(1, 'month')
  for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
    calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i))
  }

  const nextMonth = date.add(1, 'month')
  for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
    calendarCells.push(prepareCell(nextMonth, i + 1))
  }

  return calendarCells
}

export function getCalendarRows(date: Dayjs) {
  const cells = getCalendarCells(date)

  const rows = []

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7))
  }
  return rows
}

export {}
