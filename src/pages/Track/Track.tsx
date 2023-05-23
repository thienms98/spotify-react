import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TopDetail } from 'src/components/TopDetail';
import { linkFromURI } from 'src/utils';

import classNames from 'classnames/bind';
import styles from './Track.module.scss';
const cx = classNames.bind(styles);

export default function Track() {
  return (
    <div className={cx('wrapper')}>
      <TopDetail data={data.tracks[0]} type={'track'} />

      <div className={cx('lyrics')}>
        <div className={cx('title')}>Lyrics</div>
        <div className={cx('lines')}>
          {lyrics.lyrics.lines.map((line: any, index: number) => {
            return <div className={cx('line')}>{line.words}</div>;
          })}
        </div>
      </div>

      <div className={cx('artists')}>
        {data.tracks[0].artists.map((artist: any) => {
          return (
            <Link to={linkFromURI(artist.uri)} className={cx('artist')}>
              <div className={cx('avatar')}>
                <img src="/boy.jpg" alt="artist" width={50} height={50} />
              </div>
              <div className={cx('type')}>artist</div>
              <div className={cx('name')}>{artist.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

var data = {
  tracks: [
    {
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
    },
  ],
};

var lyrics = {
  lyrics: {
    syncType: 'UNSYNCED',
    lines: [
      {
        startTimeMs: '0',
        words: 'You were the shadow to my light',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Did you feel us?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Another star',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'You fade away',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Afraid our aim is out of sight',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Wanna see us',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Alive',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Was it all in my fantasy?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Were you only imaginary?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Atlantis',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Under the sea, under the sea',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Another dream',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "The monster's running wild inside of me",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: '♪',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "So lost, I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: '♪',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "So lost, I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'These shallow waters never met what I needed',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm letting go, a deeper dive",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Eternal silence of the sea',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm breathing",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Alive',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Under the bright but faded lights',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'You set my heart on fire',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: '♪',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Atlantis',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Under the sea, under the sea',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Where are you now?',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: 'Another dream',
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "The monster's running wild inside of me",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "So lost, I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: "So lost, I'm faded",
        syllables: [],
      },
      {
        startTimeMs: '0',
        words: '',
        syllables: [],
      },
    ],
    provider: 'MusixMatch',
    providerLyricsId: '64066903',
    providerDisplayName: 'Musixmatch',
    syncLyricsUri: '',
    isDenseTypeface: false,
    alternatives: [],
    language: 'en',
    isRtlLanguage: false,
    fullscreenAction: 'FULLSCREEN_LYRICS',
  },
};
