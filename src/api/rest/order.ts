import makeRequest from 'api/makeRequest'
import { AxiosResponse } from 'axios'
import { Order, OrderPayload } from 'types'

export const createOrder = (payload: OrderPayload) => {
	return makeRequest({
		url: 'order/create',
		method: 'post',
		data: payload,
		headers: { auth: true },
	}).then((response: AxiosResponse<Order>) => response.data)
}

export const getOrders = (userId: string) => {
	return makeRequest({
		url: `order/${userId}`,
		method: 'get',
		headers: { auth: true }
	}).then((response: AxiosResponse<Order[]>) => response.data)
}