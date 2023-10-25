import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './useSlice';


const stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers :  {
    addCount(state, action) {
      const index = state.findIndex((item) => item.id === Number(action.payload))
      state[index].count++;
    },
    addItem(state, action) {
      const item = action.payload;
      state.push(item);
    },
  }
});

export const { addCount, addItem } = stock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
