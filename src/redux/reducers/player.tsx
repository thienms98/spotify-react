import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlayerSlice {
  playState: boolean;
  volume: number;
}

const initialState: PlayerSlice = {
  playState: false,
  volume: 100,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playStateChange: (state, action: PayloadAction<boolean>) => {
      state.playState = action.payload;
    },
    volumeChange: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const { playStateChange, volumeChange } = playerSlice.actions;
export default playerSlice.reducer;
