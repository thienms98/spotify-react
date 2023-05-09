import { useSelector, useDispatch } from 'react-redux';
import { updateIndex } from 'src/redux/reducers/queue';
import { RootState } from 'src/redux/store';
import { Track } from 'src/components/Track';

import classNames from 'classnames/bind';
import styles from './Queue.module.scss';
const cx = classNames.bind(styles);

export default function Queue() {
  const queue = useSelector((state: RootState) => state.queue);
  const dispatch = useDispatch();

  return (
    <div className={cx('wrapper')}>
      {queue.list.map((track, index) => {
        const data = {
          ...track,
          artists: track.artists.map((art: any) => {
            return { uri: art.uri, profile: { name: art.name } };
          }),
          duration: { totalMilliseconds: track.duration_ms },
          image: track.image || { url: '', width: 0, height: 0 },
          album: null,
        };
        return (
          <div className={cx('track')}>
            <div className={cx('index')}>{index}</div>
            <Track
              data={data}
              key={track.uri}
              playHandle={() => {
                dispatch(updateIndex(index));
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

// const res = {
//   albums: [
//     {
//       album_type: 'album',
//       artists: [
//         {
//           external_urls: {
//             spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//           },
//           id: '51DevdOxIJin6DB1FXJpD1',
//           name: 'UZI',
//           type: 'artist',
//           uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//         },
//       ],
//       copyrights: [
//         {
//           text: '2021 M.O.B Entertainment Associated Label Of Govinet',
//           type: 'C',
//         },
//         {
//           text: '2021 M.O.B Entertainment Associated Label Of Govinet',
//           type: 'P',
//         },
//       ],
//       external_ids: {
//         upc: '3616553578384',
//       },
//       external_urls: {
//         spotify: 'https://open.spotify.com/album/3IBcauSj5M2A6lTeffJzdv',
//       },
//       genres: [],
//       id: '3IBcauSj5M2A6lTeffJzdv',
//       images: [
//         {
//           height: 640,
//           url: 'https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef',
//           width: 640,
//         },
//         {
//           height: 300,
//           url: 'https://i.scdn.co/image/ab67616d00001e0267c738a703dc979f5c3c52ef',
//           width: 300,
//         },
//         {
//           height: 64,
//           url: 'https://i.scdn.co/image/ab67616d0000485167c738a703dc979f5c3c52ef',
//           width: 64,
//         },
//       ],
//       label: 'M.O.B. Entertainment',
//       name: 'Kan',
//       popularity: 77,
//       release_date: '2021-03-19',
//       release_date_precision: 'day',
//       total_tracks: 10,
//       tracks: {
//         items: [
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 211016,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/5jvhTc0g18kwYQNUJM5C4e',
//             },
//             id: '5jvhTc0g18kwYQNUJM5C4e',
//             is_local: false,
//             is_playable: true,
//             name: 'Makina',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 1,
//             type: 'track',
//             uri: 'spotify:track:5jvhTc0g18kwYQNUJM5C4e',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 185458,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/72t3CRd8YEFrlc3x0OVaob',
//             },
//             id: '72t3CRd8YEFrlc3x0OVaob',
//             is_local: false,
//             is_playable: true,
//             name: 'Umrumda Değil',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/957b21793cfa732a195d1db728eaa28fe9cabc0b?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 2,
//             type: 'track',
//             uri: 'spotify:track:72t3CRd8YEFrlc3x0OVaob',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/3BVPc9s4JXzM6O1InlLxED',
//                 },
//                 id: '3BVPc9s4JXzM6O1InlLxED',
//                 name: 'Mavi',
//                 type: 'artist',
//                 uri: 'spotify:artist:3BVPc9s4JXzM6O1InlLxED',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 200000,
//             explicit: false,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/5TkQatzJqKafPgHQerZ0dL',
//             },
//             id: '5TkQatzJqKafPgHQerZ0dL',
//             is_local: false,
//             is_playable: true,
//             name: 'Gecenin Içine Gir',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/62a08e83bf51c1c9c01bc9c7a706fdda26f1d51b?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 3,
//             type: 'track',
//             uri: 'spotify:track:5TkQatzJqKafPgHQerZ0dL',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 243205,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/6IW5ocUH5DRWagxkLTlbUS',
//             },
//             id: '6IW5ocUH5DRWagxkLTlbUS',
//             is_local: false,
//             is_playable: true,
//             name: 'Nedenini Sorma',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/8b62b6e53ecd5307f1872c1390daf7053a495e8c?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 4,
//             type: 'track',
//             uri: 'spotify:track:6IW5ocUH5DRWagxkLTlbUS',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/7GaMopkesD4KK9dNbgyO5D',
//                 },
//                 id: '7GaMopkesD4KK9dNbgyO5D',
//                 name: 'Eko Fresh',
//                 type: 'artist',
//                 uri: 'spotify:artist:7GaMopkesD4KK9dNbgyO5D',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 152301,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/1ijjjMFlM3Pe8t3ykXBzxk',
//             },
//             id: '1ijjjMFlM3Pe8t3ykXBzxk',
//             is_local: false,
//             is_playable: true,
//             name: 'Mahalle',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/22decb29effb88818217b4bfeda6e783022162c4?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 5,
//             type: 'track',
//             uri: 'spotify:track:1ijjjMFlM3Pe8t3ykXBzxk',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 171880,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/4a1WLOoydq7u011UG9jjC9',
//             },
//             id: '4a1WLOoydq7u011UG9jjC9',
//             is_local: false,
//             is_playable: true,
//             name: 'Krvn',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/d926087a76e97d335af154a73dc3149eddd7b0c9?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 6,
//             type: 'track',
//             uri: 'spotify:track:4a1WLOoydq7u011UG9jjC9',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 155010,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/4hy4nY2PiYWx8qVXjpky3P',
//             },
//             id: '4hy4nY2PiYWx8qVXjpky3P',
//             is_local: false,
//             is_playable: true,
//             name: 'Vur',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/4d3df748ceb96ee16d38f761043c6994992f31b2?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 7,
//             type: 'track',
//             uri: 'spotify:track:4hy4nY2PiYWx8qVXjpky3P',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/6dOAGo4z0syiCjbnlh4VSO',
//                 },
//                 id: '6dOAGo4z0syiCjbnlh4VSO',
//                 name: 'Critical',
//                 type: 'artist',
//                 uri: 'spotify:artist:6dOAGo4z0syiCjbnlh4VSO',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 223608,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/4PpYi6USHlY7OhOcDASnD3',
//             },
//             id: '4PpYi6USHlY7OhOcDASnD3',
//             is_local: false,
//             is_playable: true,
//             name: 'Davetiye',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/894fe4feaa99230fbab7d17fbe941de1bb4051d2?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 8,
//             type: 'track',
//             uri: 'spotify:track:4PpYi6USHlY7OhOcDASnD3',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/3R27mVPp04i87RNmvysZfY',
//                 },
//                 id: '3R27mVPp04i87RNmvysZfY',
//                 name: 'Stap',
//                 type: 'artist',
//                 uri: 'spotify:artist:3R27mVPp04i87RNmvysZfY',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 196682,
//             explicit: true,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/5gx3dMxQGJ1JDw5qHarRqp',
//             },
//             id: '5gx3dMxQGJ1JDw5qHarRqp',
//             is_local: false,
//             is_playable: true,
//             name: 'Elhamdulillah',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/f5884c8e26c74eaec37742dafd14b487a32ea647?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 9,
//             type: 'track',
//             uri: 'spotify:track:5gx3dMxQGJ1JDw5qHarRqp',
//           },
//           {
//             artists: [
//               {
//                 external_urls: {
//                   spotify: 'https://open.spotify.com/artist/51DevdOxIJin6DB1FXJpD1',
//                 },
//                 id: '51DevdOxIJin6DB1FXJpD1',
//                 name: 'UZI',
//                 type: 'artist',
//                 uri: 'spotify:artist:51DevdOxIJin6DB1FXJpD1',
//               },
//             ],
//             disc_number: 1,
//             duration_ms: 192694,
//             explicit: false,
//             external_urls: {
//               spotify: 'https://open.spotify.com/track/4PUniKS3Cywu23xjdtoji5',
//             },
//             id: '4PUniKS3Cywu23xjdtoji5',
//             is_local: false,
//             is_playable: true,
//             name: 'Outro',
//             preview_url:
//               'https://p.scdn.co/mp3-preview/a82bb77bd5a75b682fee63259219fea01d42b7ee?cid=f6a40776580943a7bc5173125a1e8832',
//             track_number: 10,
//             type: 'track',
//             uri: 'spotify:track:4PUniKS3Cywu23xjdtoji5',
//           },
//         ],
//         limit: 50,
//         next: null,
//         offset: 0,
//         previous: null,
//         total: 10,
//       },
//       type: 'album',
//       uri: 'spotify:album:3IBcauSj5M2A6lTeffJzdv',
//     },
//   ],
// };
