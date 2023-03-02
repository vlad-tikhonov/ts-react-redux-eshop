import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductWithRelated } from 'types'
import { getItem, setItem} from 'helpers/persistenceStorage'
import { PERSISTENCE_STORAGE_CART_KEY } from 'constants/persistence-storage'

class CartProduct {
	id: ProductWithRelated['_id'];
	count: number;
	data: ProductWithRelated

	constructor(product: ProductWithRelated) {
		this.id = product._id
		this.count = 1
		this.data = product
	}
}

type CartSlice = {
	data: CartProduct[],
}

const initialState: CartSlice = {
	data: [],
}

const cartSlice = createSlice({
	name: "@@cart",
	initialState,
	reducers: {
		initCart: (state) => {
			const cart = getItem<CartSlice['data']>(PERSISTENCE_STORAGE_CART_KEY)

			if (!cart) {
				return
			}

			state.data = cart
		},
		addToCart: (state, action: PayloadAction<ProductWithRelated>) => {
			const cartProduct = state.data.find(p => p.id === action.payload._id)

			if(cartProduct) {
				cartProduct.count++
			} else {
				state.data.push(new CartProduct(action.payload))
			}

			setItem(PERSISTENCE_STORAGE_CART_KEY, state.data)
		},
		removeFromCart: (state, action: PayloadAction<CartProduct['id']>) => {
			const cartProduct = state.data.find(p => p.id === action.payload)

			if (!cartProduct) {
				return
			}

			if(cartProduct.count > 1) {
				cartProduct.count--
			} else {
				state.data.filter(p => p.id !== action.payload)
			}

			setItem(PERSISTENCE_STORAGE_CART_KEY, state.data)
		}
	},
})

export const { initCart, addToCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer