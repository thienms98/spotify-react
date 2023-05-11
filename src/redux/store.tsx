import { configureStore } from '@reduxjs/toolkit';

import playlistReducer from './reducers/playlist';
import queueReducer from './reducers/queue';
import playerReducer from './reducers/player';
import libraryReducer from './reducers/library';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    queue: queueReducer,
    player: playerReducer,
    library: libraryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
