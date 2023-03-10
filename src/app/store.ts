import * as api from 'api';
import { errorHandler } from 'helpers/errorHandler';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { categoriesReducer } from 'features/categories/categories-slice';
import { productsReducer } from 'features/products/products-slice'
import { productReducer } from 'features/product/product-slice'
import { authReducer } from 'features/auth/auth-slice'
import { cartReducer } from 'features/cart/cart-slice'
import { favoritesReducer } from 'features/favorites/favorites.slice';
import { promotionsReducer } from 'features/promotions/promotions-slice';
import { noveltiesReducer } from 'features/novelties/novelties-slice';
import { searchReducer } from 'features/search/search-slice'
import { reviewsReducer } from 'features/reviews/reviews-slice';

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