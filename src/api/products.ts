import axios from './axios'
import {Product, GetApisfulDataResponse} from 'types'

export const getProducts = (filters: string, perPage: string, page: string) => {
  const params = new URLSearchParams()
  params.append('per_page', perPage)
  params.append('page', page)
  params.append('filter', JSON.stringify(filters))

  return axios.get('/collections/products/', {params})
		.then((response: GetApisfulDataResponse<Product[]>) => {
			return response.data.results
		})
}