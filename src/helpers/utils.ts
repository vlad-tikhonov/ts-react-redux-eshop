import {NavLinkProps} from 'react-router-dom'
import cn from 'classnames';

type SetClassName = Exclude<Pick<NavLinkProps, "className">["className"], string | undefined>

export const setActiveClass = (activeClass: string, noActiveClass: string ):SetClassName =>
	({isActive}) =>
		(isActive ? cn(activeClass, noActiveClass) : noActiveClass)
