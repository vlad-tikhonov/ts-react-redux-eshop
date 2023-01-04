import axios from './axios'
import {Category, GetApisfulDataResponse} from 'types'

export const getCategoryId = (slug: string) => {
  const filter = {slug: {exact: slug}}
  const params = new URLSearchParams()

  params.append('filter', JSON.stringify(filter))

  return axios
    .get('/collections/categories/', {params})
    .then((response) => response.data)
}

export const getCategories = () => {
  const params = new URLSearchParams()
  params.append('per_page', '20')
  return axios
    .get('/collections/categories/', {params})
    .then((response: GetApisfulDataResponse<Category[]>) => response.data.results )
}