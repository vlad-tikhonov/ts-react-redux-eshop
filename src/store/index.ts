import * as api from 'api';
import { errorHandler } from 'helpers/errorHandler';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { categoriesReducer } from './categories/categories-slice';
import { productsReducer } from './products/products-slice'
import { productReducer } from './product/product-slice'
import { authReducer } from './auth/auth-slice'
import { cartReducer } from './cart/cart-slice'
import { favoritesReducer } from './favorites/favorites-slice';
import { promotionsReducer } from './promotions/promotions-slice';
import { noveltiesReducer } from './novelties/novelties-slice';
import { searchReducer } from './search/search-slice'
import { reviewsReducer } from './reviews/reviews-slice';
import { registerReducer } from './register/register-slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
		products: productsReducer,
		product: productReducer,
		auth: authReducer,
		cart: cartReducer,
		favorites: favoritesReducer,
		promotions: promotionsReducer,
		novelties: noveltiesReducer,
		search: searchReducer,
		reviews: reviewsReducer,
		register: registerReducer,
  },
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				api, errorHandler
			}
		},
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