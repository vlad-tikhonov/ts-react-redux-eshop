import axios from './axios'
import { AxiosResponse } from 'axios';
import { SearchResults } from 'types'

export const getSearchResult = (query: string): Promise<SearchResults> => {
  return axios.post('/search', { query })
		.then((response: AxiosResponse<SearchResults>) =>
			response.data
		)
}