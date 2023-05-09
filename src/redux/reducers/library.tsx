import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Library {
  uri: string;
  name: string;
  coverArt: {
    url: string;
  };
  creator: { uri: string; name: string };
  pinned: boolean;
  tracks: Array<any>;
}

const initialState: { list: Array<Library> } = {
  list: [],
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    createItem: (state, action: PayloadAction<any>) => {},
    insertItem: (state, action: PayloadAction<any>) => {
      const insertItem = { ...action.payload, pinned: false };
      state.list.push(insertItem);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      let deletedList = [...state.list];
      deletedList.splice(action.payload, 1);
      state.list = deletedList;
    },
    switchPinItem: (state, action: PayloadAction<number>) => {
      state.list[action.payload].pinned = !state.list[action.payload].pinned;
    },
  },
});

export const { insertItem } = librarySlice.actions;
export default librarySlice.reducer;
