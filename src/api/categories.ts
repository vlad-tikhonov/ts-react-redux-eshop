import axios from './axios'
import {Category} from 'types'
import { AxiosResponse } from 'axios'

export const getCategoryId = (slug: string) => {
  const filter = {slug: {exact: slug}}
  const params = new URLSearchParams()

  params.append('filter', JSON.stringify(filter))

  return axios
    .get('/collections/categories/', {params})
    .then((response) => response.data)
}

export const getCategories = () => {
  return axios
    .get('/category/all')
    .then((response: AxiosResponse<Category[]>) => response.data )
}