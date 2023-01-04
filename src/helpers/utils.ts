import {NavLinkProps} from 'react-router-dom'
import cn from 'classnames';

//Helper for NavLink component
type SetClassName = Exclude<Pick<NavLinkProps, "className">["className"], string | undefined>

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

// export const calculatePriceRange = (productsArray) => {
//   let priceSet = new Set()
//   productsArray.forEach((product) => {
//     priceSet.add(product.price)
//   })
//   const minPrice = Math.min(...Array.from(priceSet))
//   const maxPrice = Math.max(...Array.from(priceSet))

//   return [minPrice, maxPrice]
// }
