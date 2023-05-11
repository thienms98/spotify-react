import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Library {
  uri: string;
  name: string;
  coverArt: {
    url: string;
  };
  creator: { uri: string; name: string };
  pinned: boolean;
  tracks: Array<any>;
  type: 'playlist' | 'album' | 'self' | 'liked';
  createdTime: Date;
}

const initialState: { list: Array<Library> } = JSON.parse(localStorage.getItem('library') || 'null') || {
  list: [
    {
      uri: 'spotify:collection:liked',
      name: 'Liked Songs',
      coverArt: {
        url: '',
      },
      creator: { uri: '', name: 'Thien' },
      pinned: false,
      tracks: [],
      type: 'liked',
      createdTime: new Date('5/10/2023 12:00:00'),
    },
    {
      uri: 'spotify:playlist:37i9dQZF1DX4Wsb4d7NKfP',
      name: 'NKVT 2021',
      coverArt: {
        url: 'https://i.scdn.co/image/ab67706f00000003c535afb205514b59e204627a',
      },
      creator: { uri: 'spotify:artist:Spotify', name: 'Spotify' },
      pinned: false,
      tracks: [],
      type: 'playlist',
      createdTime: new Date('5/10/2023 13:14:56'),
    },
  ],
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    // createItem: (state, action: PayloadAction<any>) => {
    //   state.list.push()
    // },
    addItem: (state, action: PayloadAction<any>) => {
      const insertItem = { ...action.payload, pinned: false, createdTime: new Date() };
      state.list.push(insertItem);
      localStorage.setItem('library', JSON.stringify(state));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      let deletedList = [...state.list];
      deletedList.splice(action.payload, 1);
      state.list = deletedList;
      localStorage.setItem('library', JSON.stringify(state));
    },
    switchPinItem: (state, action: PayloadAction<number>) => {
      state.list[action.payload].pinned = !state.list[action.payload].pinned;
      localStorage.setItem('library', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, switchPinItem } = librarySlice.actions;
export default librarySlice.reducer;
