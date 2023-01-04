import axios from './axios'
import {Product, GetApisfulDataResponse} from 'types'

type GetProductsFilters = {
	category_slug: {
		exact: string;
	};
	price: {
		gte: number;
	}
	_price: {
		lte: number;
	}
}

export type GetProductsProps = {
	filters: GetProductsFilters;
	perPage: string;
	page: string;
}

export const getProducts = ({filters, perPage, page}: GetProductsProps) => {
  const params = new URLSearchParams([
		['per_page', perPage],
		['page', page],
		['filter', JSON.stringify(filters)]
	])
  return axios.get('/collections/products/', {params})
		.then((response: GetApisfulDataResponse<Product[]>) =>
			response.data.results
		)
}