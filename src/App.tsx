import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'src/redux/store';
import { setPlaylist } from 'src/redux/reducers/queue';
import { Routes, Route } from 'react-router-dom';
import { Sidebar, Topbar, NowPlaying } from 'src/Layout';
import { Search } from 'src/components/Search';
import { Homepage, Searchpage, Queue, Track, Playlist, Album } from './pages';

import 'normalize.css';
import 'src/App.css';

interface RequestOptions {
  method: string;
  headers: HeadersInit;
}
let baseUrl = 'https://spotify23.p.rapidapi.com';

const options: RequestOptions = {
  method: 'GET',
  headers: new Headers([
    ['content-type', 'application/octet-stream'],
    ['X-RapidAPI-Key', '2c37ff9770msh38de50c5a059b0ep1eedebjsn8c2eea331b8b'],
    ['X-RapidAPI-Host', 'spotify23.p.rapidapi.com'],
    // ['X-RapidAPI-Key', `${process.env.REACT_APP_API_KEY}`],
    // ['X-RapidAPI-Host', `${process.env.REACT_APP_API_HOST}`],
  ]),
};

function App() {
  const queue = useSelector((state: RootState) => state.queue);
  const dispatch = useDispatch();
  const [, type, id] = useMemo(() => queue.uri.split(':'), [queue.uri]);

  useEffect(() => {
    switch (type) {
      case 'album':
        fetch(`${baseUrl}/albums/?ids=${id}`, options)
          .then((res) => res.json())
          .then((res) => {
            dispatch(
              setPlaylist(
                res.albums[0].tracks.items.map((item: {}) => {
                  return { ...item, image: { ...res.albums[0].images[0] } };
                }),
              ),
            );
          });
        break;

      case 'playlist':
        fetch(`${baseUrl}/playlist_tracks/?id=${id}&offset=0&limit=100`, options)
          .then((res) => res.json())
          .then((res) => {
            dispatch(
              setPlaylist(
                res.items.map((item: { track: {}; video_thumbnail: {} }) => {
                  return { ...item, ...item.track, image: item.video_thumbnail };
                }),
              ),
            );
          });
        break;

      case 'artist':
        fetch(`${baseUrl}/artist_overview/?id=${id}`, options)
          .then((res) => res.json())
          .then((res) => {
            dispatch(
              setPlaylist(
                res.data.artist.discography.topTracks.items.map((item: any) => {
                  return {
                    ...item.track,
                    artists: item.track.artists.items,
                    image: item.track.album.coverArt.sources[0],
                  };
                }),
              ),
            );
          });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, id]);

  return (
    <div className="App">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="top-bar">
        <Topbar />
      </div>
      <div className="now-playing">{queue.list.length > 0 && <NowPlaying />}</div>
      <div className="main-view">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/search/:query" element={<Searchpage />}></Route>
          <Route path="/queue" element={<Queue />}></Route>
          <Route path="/track/:trackId" element={<Track />}></Route>
          <Route path="/playlist/:playlistId" element={<Playlist />}></Route>
          <Route path="/album/:albumId" element={<Album />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
