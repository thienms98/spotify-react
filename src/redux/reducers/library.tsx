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

function save(library: { list: Library[] }) {
  localStorage.setItem('library', JSON.stringify(library));
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    // add item by data <Object> push to last position
    addItem: (state, action: PayloadAction<any>) => {
      const insertItem = { ...action.payload, pinned: false, createdTime: new Date() };
      state.list.push(insertItem);
      save(state);
    },
    // remove item by index
    removeItem: (state, action: PayloadAction<number>) => {
      if (action.payload === 0) return;
      let deletedList = [...state.list];
      deletedList.splice(action.payload, 1);
      state.list = deletedList;
      save(state);
    },
    // pin / unpin by index
    switchPinItem: (state, action: PayloadAction<number>) => {
      state.list[action.payload].pinned = !state.list[action.payload].pinned;
      save(state);
    },
    // add track to favorite playlist with data <Object>
    addTrackToFavorite: (state, action: PayloadAction<any>) => {
      const favList = state.list.find((list) => list.type === 'liked');
      if (!favList) return;
      favList.tracks.push(action.payload);
      save(state);
    },
    // remove track from favorite by uri
    removeTrackFromFavorite: (state, action: PayloadAction<string>) => {
      const position = state.list[0].tracks.findIndex((track) => track.uri === action.payload);
      if (position > -1) state.list[0].tracks.splice(position, 1);
      save(state);
    },
  },
});

export const { addItem, removeItem, switchPinItem, addTrackToFavorite, removeTrackFromFavorite } = librarySlice.actions;
export default librarySlice.reducer;
