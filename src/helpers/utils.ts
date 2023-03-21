import {NavLinkProps} from 'react-router-dom'
import dayjs from 'app/dayjs'
import cn from 'classnames';

//Helper for NavLink component
type SetClassName = Exclude<NavLinkProps["className"], string | undefined>

export const setActiveClass = (activeClass: string, noActiveClass: string ):SetClassName =>
	({isActive}) =>
		(isActive ? cn(activeClass, noActiveClass) : noActiveClass)


export const modifyPrice = (price: string | number) => {
	let roundedPrice

	if (typeof price === 'string') {
		roundedPrice = parseInt(price).toFixed(2)
	} else {
		roundedPrice = price.toFixed(2)
	}

  return String(roundedPrice + ' ₽').replace(/\./, ',')
}

export const modifyDiscount = (discount: number) =>
  String('-' + discount + '%')


export const calculatePriceWithDiscount = (price: number, discount: number) =>
  String(price - (price / 100) * discount)


export const shortnerTitle = (title: string, maxLength: number) => {
  if (title.length <= maxLength) {
    return title
  }
  return title.slice(0, maxLength) + ' ...'
}

export const formatDate = (date: Date): string => {
	let dd = '';
	let mm = '';
	let yy = '';

  let day = date.getDate();
  if (day < 10) {
		dd = '0' + day;
	} else {
		dd = day.toString()
	}

  let month = (date.getMonth() + 1);
  if (month < 10) {
		mm = '0' + month;
	} else {
		mm = month.toString()
	}

  let year = date.getFullYear() % 100;
  if (year < 10) {
		yy = '0' + year;
	} else {
		yy = year.toString()
	}

	return `${dd}.${mm}.${yy}`
}

export const getStringWeekRange = () => {
	const result: string[] = []

	for (let i = 1; i < 8; i++){
		result.push(dayjs().add(i, 'day').format("DD.MM.YYYY"))
	}

	return result
}