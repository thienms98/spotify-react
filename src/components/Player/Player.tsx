import { useEffect, useState, useRef } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { RangeSlider } from '../RangeSlider';
import { timeFormater } from 'src/utils';

import classNames from 'classnames/bind';
import styles from './Player.module.scss';
const cx = classNames.bind(styles);

declare global {
  interface Window {
    onSpotifyIframeApiReady: any;
  }
}

export default function Player({ volume }: { volume: number }) {
  const album = {
    album_group: 'album',
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
        },
        id: '6UbmqUEgjLA6jAcXwbM1Z9',
        name: 'BIBI',
        type: 'artist',
        uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
      },
    ],
    copyrights: [
      {
        text: '© 2022 Feel Ghood Music/88rising Records',
        type: 'C',
      },
      {
        text: '℗ 2022 Feel Ghood Music/88rising Records',
        type: 'P',
      },
    ],
    external_ids: {
      upc: '5054197387968',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/album/2ZYIby6irhfnCE3uQDBCi0',
    },
    genres: [],
    id: '2ZYIby6irhfnCE3uQDBCi0',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2737bc2c6af7c58992239920313',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e027bc2c6af7c58992239920313',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048517bc2c6af7c58992239920313',
        width: 64,
      },
    ],
    is_playable: true,
    label: 'Feel Ghood Music/88risingMusic',
    name: 'Lowlife Princess: Noir',
    popularity: 75,
    release_date: '2022-11-17',
    release_date_precision: 'day',
    total_tracks: 12,
    tracks: {
      items: [
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 67734,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/3VveFHvQNjUFjR1bnjWLzx',
          },
          id: '3VveFHvQNjUFjR1bnjWLzx',
          is_local: false,
          is_playable: true,
          name: 'Intro',
          preview_url:
            'https://p.scdn.co/mp3-preview/be8388b3a12da169d29b9474aa25403b86aea020?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:3VveFHvQNjUFjR1bnjWLzx',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 190568,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/7GqiGCr2XbF9qxKJRMTTA6',
          },
          id: '7GqiGCr2XbF9qxKJRMTTA6',
          is_local: false,
          is_playable: true,
          name: 'Blade',
          preview_url:
            'https://p.scdn.co/mp3-preview/bea66a53d577abf1e6ab3254866ad0dd31f61ffd?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 2,
          type: 'track',
          uri: 'spotify:track:7GqiGCr2XbF9qxKJRMTTA6',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 165135,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/0ra3bPUOj2YnY4FJHXtgHZ',
          },
          id: '0ra3bPUOj2YnY4FJHXtgHZ',
          is_local: false,
          is_playable: true,
          name: 'BIBI Vengeance',
          preview_url:
            'https://p.scdn.co/mp3-preview/308a16787f1d5f62e8d0f0c560fb84cc9ca4e0a9?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 3,
          type: 'track',
          uri: 'spotify:track:0ra3bPUOj2YnY4FJHXtgHZ',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 203945,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/2JsO5Qfw4liRPjj26HXR13',
          },
          id: '2JsO5Qfw4liRPjj26HXR13',
          is_local: false,
          is_playable: true,
          name: 'Animal Farm',
          preview_url:
            'https://p.scdn.co/mp3-preview/51f65bbe63cc94c0f675c9f1d5a1eab30efe3400?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 4,
          type: 'track',
          uri: 'spotify:track:2JsO5Qfw4liRPjj26HXR13',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 133904,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/2HoieslRjno48m3VcZcWB6',
          },
          id: '2HoieslRjno48m3VcZcWB6',
          is_local: false,
          is_playable: true,
          name: 'MotoSpeed 24',
          preview_url:
            'https://p.scdn.co/mp3-preview/77a3e86fa4e5fe56f0c8aba58c4f1f0be0549895?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 5,
          type: 'track',
          uri: 'spotify:track:2HoieslRjno48m3VcZcWB6',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 66429,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/685eV6j7d4WjDjKUmB5eU9',
          },
          id: '685eV6j7d4WjDjKUmB5eU9',
          is_local: false,
          is_playable: true,
          name: 'Sweet Sorrow of Mother',
          preview_url:
            'https://p.scdn.co/mp3-preview/2982e65a71da953078030ea1f257e747d2ff4618?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 6,
          type: 'track',
          uri: 'spotify:track:685eV6j7d4WjDjKUmB5eU9',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/4BBN286rBKyCWsSPq2cxYO',
              },
              id: '4BBN286rBKyCWsSPq2cxYO',
              name: 'Sam Kim',
              type: 'artist',
              uri: 'spotify:artist:4BBN286rBKyCWsSPq2cxYO',
            },
          ],
          disc_number: 1,
          duration_ms: 168155,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/0Bhas42TnxGmzfaUpcOXXi',
          },
          id: '0Bhas42TnxGmzfaUpcOXXi',
          is_local: false,
          is_playable: true,
          name: "Loveholic's hangover (feat. Sam Kim)",
          preview_url:
            'https://p.scdn.co/mp3-preview/5b9fd6c93335c761e8d613807289f05230c15c36?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 7,
          type: 'track',
          uri: 'spotify:track:0Bhas42TnxGmzfaUpcOXXi',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 178314,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/5IZU683fJv7nISRBmamYS1',
          },
          id: '5IZU683fJv7nISRBmamYS1',
          is_local: false,
          is_playable: true,
          name: 'Wet Nightmare',
          preview_url:
            'https://p.scdn.co/mp3-preview/43545fda5ec86bd5e5015d61b1556e1bd6505e2a?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 8,
          type: 'track',
          uri: 'spotify:track:5IZU683fJv7nISRBmamYS1',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 104696,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/7xIaSodQxnLl6JcTWHiZxo',
          },
          id: '7xIaSodQxnLl6JcTWHiZxo',
          is_local: false,
          is_playable: true,
          name: 'Witch Hunt',
          preview_url:
            'https://p.scdn.co/mp3-preview/8d58617af3edd34304e89f01e83d511d05a98c25?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 9,
          type: 'track',
          uri: 'spotify:track:7xIaSodQxnLl6JcTWHiZxo',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 151742,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/0PqUct6dFr4rx1oXhgBysQ',
          },
          id: '0PqUct6dFr4rx1oXhgBysQ',
          is_local: false,
          is_playable: true,
          name: 'Lowlife Princess',
          preview_url:
            'https://p.scdn.co/mp3-preview/b636ceee4741abe80cb486596f0149139d3e95c5?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 10,
          type: 'track',
          uri: 'spotify:track:0PqUct6dFr4rx1oXhgBysQ',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 193855,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/63XxuxFW1JNhGr4x5JsF4d',
          },
          id: '63XxuxFW1JNhGr4x5JsF4d',
          is_local: false,
          is_playable: true,
          name: 'JOTTO',
          preview_url:
            'https://p.scdn.co/mp3-preview/4e1dbe6e5fa7f84065162c016ca7f0d8290d590b?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 11,
          type: 'track',
          uri: 'spotify:track:63XxuxFW1JNhGr4x5JsF4d',
        },
        {
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9',
              },
              id: '6UbmqUEgjLA6jAcXwbM1Z9',
              name: 'BIBI',
              type: 'artist',
              uri: 'spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9',
            },
          ],
          disc_number: 1,
          duration_ms: 193770,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/4TYRFeMSbuyaW9v8latsGF',
          },
          id: '4TYRFeMSbuyaW9v8latsGF',
          is_local: false,
          is_playable: true,
          name: 'City Love',
          preview_url:
            'https://p.scdn.co/mp3-preview/1a1333b048ca8c54f5a20591b06a9f28cda11e9e?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
          track_number: 12,
          type: 'track',
          uri: 'spotify:track:4TYRFeMSbuyaW9v8latsGF',
        },
      ],
      limit: 50,
      next: null,
      offset: 0,
      previous: null,
      total: 12,
    },
    type: 'album',
    uri: 'spotify:album:2ZYIby6irhfnCE3uQDBCi0',
  };
  const queue = useSelector((state: RootState) => state.queue);

  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [playlist, setPlaylist] = useState<any[]>(() => {
    return album.tracks.items;
  });
  const [currentSong, setCurrentSong] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    setCurrentSong(0);
    setPlaylist(queue.list);
  }, [queue]);

  useEffect(() => {
    audioRef.current.play();
    setPlaying(true);
  }, [playlist, currentSong]);

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    let getTime: ReturnType<typeof setTimeout> = setTimeout(() => {
      setCurrentTime(audioRef.current.currentTime || 0);
    }, 500);

    return () => clearTimeout(getTime);
  }, [playing, currentTime]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  const updateCurrentTime = (time: number) => {
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  // useEffect(() => {
  //   window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
  //     const element = document.getElementById('embed-iframe');
  //     const options = {
  //       width: 300,
  //       height: 100,
  //       uri: 'spotify:album:38DiN8raykLZKEr5T6v5hM',
  //     };
  //     const callback = (EmbedController: any) => {};
  //     IFrameAPI.createController(element, options, callback);
  //   };
  // }, []);

  return (
    <div className={cx('wrapper')}>
      {/* <div id="embed-iframe"></div> */}

      <audio
        src={playlist[currentSong]?.preview_url}
        ref={audioRef}
        onEnded={() => {
          audioRef.current.pause();
          setPlaying(false);
          setCurrentSong((cur) => (cur + 1 < playlist.length ? cur + 1 : cur));
        }}
      ></audio>

      <div className={cx('btns')}>
        <div
          className={cx('item', { disabled: currentSong <= 0 })}
          onClick={() => setCurrentSong((cur) => (cur - 1 > 0 ? cur - 1 : cur))}
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </div>

        <div className={cx('item')} onClick={() => setPlaying((prev) => !prev)}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} />
        </div>

        <div
          className={cx('item', { disabled: currentSong >= playlist.length - 1 })}
          onClick={() => setCurrentSong((cur) => (cur + 1 < playlist.length - 1 ? cur + 1 : cur))}
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </div>
      </div>

      <div className={cx('time-range')}>
        {timeFormater(Math.round(currentTime))}
        <RangeSlider current={currentTime} max={audioRef.current.duration || 0} changeHandler={updateCurrentTime} />
        {timeFormater(Math.round(audioRef.current.duration || 0))}
      </div>
    </div>
  );
}
