import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginInfo",
  initialState: {
    value: [
      {
        name: "Nitish",
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = loginSlice.actions;
export default loginSlice.reducer;
