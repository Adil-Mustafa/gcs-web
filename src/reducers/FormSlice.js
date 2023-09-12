import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial form data here
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // Add reducers for form data manipulation here
  },
});

export const { /* Action creators */ } = formSlice.actions;

export default formSlice.reducer;
