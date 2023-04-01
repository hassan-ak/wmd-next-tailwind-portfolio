import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;
export const selectedTheme = (state: RootState) => state.theme.value;
export default themeSlice.reducer;
