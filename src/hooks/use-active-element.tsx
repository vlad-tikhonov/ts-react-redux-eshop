import {useEffect, useState} from 'react'

export const useActiveElement = () => {
  const [element, setElement] = useState<Element | null>(null)

  const changeActiveElement = () => {
    setElement(document.activeElement)
  }

  useEffect(() => {
    document.addEventListener('click', changeActiveElement, {capture: true})
    changeActiveElement()
    return () => document.removeEventListener('click', changeActiveElement, {capture: true})
  }, [])

  return element
}
