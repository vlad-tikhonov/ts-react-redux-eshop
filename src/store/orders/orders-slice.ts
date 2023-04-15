import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, Order, OrderPayload } from "types";

type OrdersSlice = {
	data: Order[];
	errors: string[];
	isLoading: boolean;
	new: Order | null;
}

const initialState: OrdersSlice = {
	data: [],
	errors: [],
	isLoading: false,
	new: null
}

export const loadOrders = createAsyncThunk<
  Order[],
  string,
  {
    state: { orders: OrdersSlice };
    extra: Extra;
    rejectValue: string[];
  }
>(
  "@@orders/load-orders",
  async (userId, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.order.getOrders(userId);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { orders: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);

export const createOrder = createAsyncThunk<
  Order,
  OrderPayload,
  {
    state: { orders: OrdersSlice };
    extra: Extra;
    rejectValue: string[];
  }
>(
  "@@orders/create-order",
  async (payload, { extra: { api, errorHandler }, rejectWithValue }) => {
    try {
      return await api.order.createOrder(payload);
    } catch (e) {
			const message = errorHandler(e)

			return rejectWithValue(message)
    }
  },
  {
    condition: (_, { getState }) => {
      const { orders: { isLoading } } = getState();
      if (isLoading) {
        return false;
      }
    },
  }
);


const ordersSlice = createSlice({
	name: "@@orders",
	initialState,
	reducers: {
		resetOrders: () => initialState,
		resetNew: (state) => {
			state.new = null
		},
		resetErrors: (state) => {
			state.errors.length = 0
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadOrders.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(loadOrders.rejected, (state, action) => {
        state.isLoading = false;

				if (action.payload) {
					state.errors = action.payload
				} else {
					state.errors.push('Cannot load data - unknown error')
				}
			})
			.addCase(loadOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
			})
			.addCase(createOrder.pending, (state) => {
				state.isLoading = true
				state.errors = []
			})
			.addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;

				if (action.payload) {
					state.errors = action.payload
				} else {
					state.errors.push('Cannot load data - unknown error')
				}
			})
			.addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
				state.new = action.payload
			})
	}
})

export const { resetOrders, resetNew, resetErrors } = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer