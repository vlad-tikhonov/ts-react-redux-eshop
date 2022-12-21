import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import * as api from 'api'
import { categoriesReducer } from 'features/categories/categories-slice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
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