import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Player } from 'src/components/Player';
import { RangeSlider } from 'src/components/RangeSlider';

import classNames from 'classnames/bind';
import styles from './NowPlaying.module.scss';
const cx = classNames.bind(styles);

const track = {
  album: {
    album_type: 'single',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3t8WiyalpvnB9AObcMufiE',
        },
        id: '3t8WiyalpvnB9AObcMufiE',
        name: 'Mahmut Orhan',
        type: 'artist',
        uri: 'spotify:artist:3t8WiyalpvnB9AObcMufiE',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/40Hr91B6wn9pO83Gj0JMrP',
        },
        id: '40Hr91B6wn9pO83Gj0JMrP',
        name: 'Ali Arutan',
        type: 'artist',
        uri: 'spotify:artist:40Hr91B6wn9pO83Gj0JMrP',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5xkqotsRPu6KQ4PiWjSGQf',
        },
        id: '5xkqotsRPu6KQ4PiWjSGQf',
        name: 'Selin',
        type: 'artist',
        uri: 'spotify:artist:5xkqotsRPu6KQ4PiWjSGQf',
      },
    ],
    external_urls: {
      spotify: 'https://open.spotify.com/album/1B68g8b4wpedNDvvQLAoCe',
    },
    id: '1B68g8b4wpedNDvvQLAoCe',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02fa258529452f4ed34cc961b1',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851fa258529452f4ed34cc961b1',
        width: 64,
      },
    ],
    name: 'In Control (feat. Selin)',
    release_date: '2020-10-30',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:1B68g8b4wpedNDvvQLAoCe',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3t8WiyalpvnB9AObcMufiE',
      },
      id: '3t8WiyalpvnB9AObcMufiE',
      name: 'Mahmut Orhan',
      type: 'artist',
      uri: 'spotify:artist:3t8WiyalpvnB9AObcMufiE',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/40Hr91B6wn9pO83Gj0JMrP',
      },
      id: '40Hr91B6wn9pO83Gj0JMrP',
      name: 'Ali Arutan',
      type: 'artist',
      uri: 'spotify:artist:40Hr91B6wn9pO83Gj0JMrP',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/5xkqotsRPu6KQ4PiWjSGQf',
      },
      id: '5xkqotsRPu6KQ4PiWjSGQf',
      name: 'Selin',
      type: 'artist',
      uri: 'spotify:artist:5xkqotsRPu6KQ4PiWjSGQf',
    },
  ],
  disc_number: 1,
  duration_ms: 179232,
  explicit: false,
  external_ids: {
    isrc: 'USUS12000579',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/4WNcduiCmDNfmTEz7JvmLv',
  },
  id: '4WNcduiCmDNfmTEz7JvmLv',
  is_local: false,
  is_playable: true,
  name: 'In Control (feat. Selin)',
  popularity: 57,
  preview_url:
    'https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832',
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:4WNcduiCmDNfmTEz7JvmLv',
};

export default function NowPlaying() {
  // fetch('https://accounts.spotify.com/api/token', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENTID}&client_secret=${process.env.REACT_APP_CLIENTSECRET}`,
  // // });
  // console.log(process.env.REACT_APP_CLIENTID);
  const [volume, setVolume] = useState<number>(100);
  const adjustVolume = (vol: number) => {
    setVolume(vol);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('detail')}>
        <div className={cx('image')}>
          <img src={track.album.images.at(0)?.url} alt={track.name} />
        </div>
        <div className={cx('text')}>
          <div className={cx('name')}>{track.name}</div>
          <div className={cx('artists')}>
            {track.artists.map((artist) => {
              return (
                <span className={cx('item')} key={artist.id}>
                  <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
                </span>
              );
            })}
          </div>
        </div>
        <div className={cx('btns')}>
          <div className={cx('btn')}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
      <div className={cx('player-control')}>
        <Player volume={volume} />
      </div>
      <div className={cx('more')}>
        <RangeSlider current={volume} max={100} changeHandler={adjustVolume} />
      </div>
    </div>
  );
}
