import {NavLinkProps} from 'react-router-dom'
import cn from 'classnames';

//Helper for NavLink component
type SetClassName = Exclude<Pick<NavLinkProps, "className">["className"], string | undefined>

export const setActiveClass = (activeClass: string, noActiveClass: string ):SetClassName =>
	({isActive}) =>
		(isActive ? cn(activeClass, noActiveClass) : noActiveClass)


export const modifyPrice = (price: string) => {
  const roundedPrice = parseInt(price).toFixed(2)
  return String(roundedPrice + ' ₽').replace(/\./, ',')
}

export const modifyDiscount = (discount: string) =>
  String('-' + discount + '%')


export const calculatePriceWithDiscount = (price: string, discount: string) =>
  String(Number(price) - (Number(price) / 100) * Number(discount))


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
