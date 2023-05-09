import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylist, getPlaylistTracks } from 'src/api';

import { TopDetail } from 'src/components/TopDetail';
import { Track } from 'src/components/Track';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Playlist.module.scss';
const cx = classNames.bind(styles);

export default function Playlist() {
  const { playlistId } = useParams();

  const [detail, setDetail] = useState<any>(null);
  const [tracks, setTracks] = useState<any>(null);

  useEffect(() => {
    if (!playlistId) return;
    getPlaylist(playlistId).then((detail) => setDetail(detail));
    getPlaylistTracks(playlistId).then((playlistTracks) => setTracks(playlistTracks));
  }, [playlistId]);

  console.log(tracks, detail);

  return (
    <div className={cx('wrapper')}>
      <TopDetail type="playlist" data={detail} />

      <div className={cx('header')}>
        <div className={cx('item', 'index')}>#</div>
        <div className={cx('item', 'title')}>Title</div>
        <div className={cx('item', 'empty')}></div>
        <div className={cx('item', 'album')}>Album</div>
        <div className={cx('item', 'duration')}>
          <FontAwesomeIcon icon={faClock} />
        </div>
      </div>
      {tracks &&
        tracks.items.map((item: any, index: number) => {
          const { uri, artists, name, duration_ms, album, explicit } = item.track;

          const data = {
            uri,
            explicit,
            artists: artists?.map((artist: any) => ({ ...artist, profile: { name: artist.name } })),
            name,
            duration: { totalMilliseconds: duration_ms },
            image: album.images[0],
            album,
          };
          return <Track index={index + 1} data={data} playHandle={() => {}} />;
        })}
    </div>
  );
}
