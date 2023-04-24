import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Queue {
  uri: string;
  list: any[];
  currentIndex: number;
}

const initialState: Queue = {
  uri: '',
  list: [],
  currentIndex: 0,
};

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    // update current playing index
    updateIndex(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload;
    },
    // get a single track to initiate a queue
    createQueueBySingle(state, action: PayloadAction<Object>) {
      state.list = [action.payload];
    },
    // add a single track to last of queue
    addSingleToQueue(state, action: PayloadAction<Object>) {
      state.list.push(action.payload);
    },

    // get playlist's uri then replace playlist with queue
    setAlbumURI(state, action: PayloadAction<string>) {
      state.uri = action.payload;
    },
    setPlaylist(state, action: PayloadAction<[]>) {
      state.list = action.payload;
    },
  },
});

export const { createQueueBySingle, addSingleToQueue, setAlbumURI, setPlaylist, updateIndex } = queueSlice.actions;
export default queueSlice.reducer;
