import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PlaylistSlice {
  playlist: any[];
}

const initialState: PlaylistSlice = {
  playlist: [],
};

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<any[]>) => {
      state.playlist = action.payload;
    },
  },
});

export const { init } = playlistSlice.actions;

export default playlistSlice.reducer;
