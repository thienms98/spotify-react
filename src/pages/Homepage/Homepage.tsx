import { Card } from 'src/components/Card';
import { Section } from 'src/components/Section';

import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
const cx = classNames.bind(styles);

const playlist = [
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
];

export default function Homepage() {
  return (
    <div className={cx('wrapper')}>
      <Section title="Today mix" expandable={true}>
        {playlist.map((track) => {
          return <Card key={track.id} data={track} />;
        })}
      </Section>
    </div>
  );
}
