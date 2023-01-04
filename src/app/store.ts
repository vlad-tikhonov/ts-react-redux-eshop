import * as api from 'api'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { categoriesReducer } from 'features/categories/categories-slice';
import { productsReducer } from 'features/products/products-slice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
		products: productsReducer,
  },
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				api
			}
		}
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