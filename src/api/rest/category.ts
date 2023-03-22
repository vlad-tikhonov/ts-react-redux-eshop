import makeRequest from 'api/makeRequest'
import {Category} from 'types'
import { AxiosResponse } from 'axios'


export const getCategories = () => {
  return makeRequest({
			url: '/category/all',
			method: 'get',
		})
		.then((response: AxiosResponse<Category[]>) => response.data)
}