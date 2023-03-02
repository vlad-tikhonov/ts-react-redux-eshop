import * as api from 'api';
import { errorHandler } from 'helpers/errorHandler';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { categoriesReducer } from 'features/categories/categories-slice';
import { productsReducer } from 'features/products/products-slice'
import { productReducer } from 'features/product/product-slice'
import { authReducer } from 'features/auth/auth-slice'
import { cartReducer } from 'features/cart/cart-slice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
		products: productsReducer,
		product: productReducer,
		auth: authReducer,
		cart: cartReducer,
  },
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				api, errorHandler
			}
		},
		// serializableCheck: false
	})
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;