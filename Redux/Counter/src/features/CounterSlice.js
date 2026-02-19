import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    inc: (state, action) => {
        console.log(state);
      state.value += action.payload;
    },
    dec: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { inc, dec, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
