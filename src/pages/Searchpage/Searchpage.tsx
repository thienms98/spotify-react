import { Link } from 'react-router-dom';

import { Card } from 'src/components/Card';
import { Section } from 'src/components/Section';
import { Track } from 'src/components/Track';
import { result } from './result';

import classNames from 'classnames/bind';
import styles from './Searchpage.module.scss';
const cx = classNames.bind(styles);

export default function Searchpage() {
  return (
    <div className={cx('wrapper')}>
      <Section title="Top result" expandable={false}>
        {/* <Card data={result.topResults.items.at(0)?.data} /> */}
      </Section>
      <Section title="Songs" expandable={false}>
        {[...result.tracks.items].splice(0, 4).map(({ data }) => {
          const track = {
            uri: data.uri,
            artists: data.artists.items,
            name: data.name,
            duration: data.duration,
            image: data.albumOfTrack.coverArt.sources.at(0) || { width: 0, height: 0, url: '' },
            album: null,
          };
          return <Track data={track} key={data.id} playHandle={() => {}} />;
        })}
      </Section>

      <Section title="Featured" expandable={result.artists.items.length > 6}>
        {result.topResults.featured.map(({ data }) => {
          return (
            <div className={cx('item')} key={data.uri}>
              <Card data={data} />
            </div>
          );
        })}
      </Section>

      <Section title="Artists" expandable={result.artists.items.length > 6}>
        {result.artists.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Albums" expandable={result.albums.items.length > 6}>
        {result.albums.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Playlists" expandable={result.playlists.items.length > 6}>
        {result.playlists.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Podcasts" expandable={result.podcasts.items.length > 6}>
        {result.podcasts.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Episodes" expandable={result.episodes.items.length > 6}>
        {result.episodes.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Profiles" expandable={result.users.items.length > 6}>
        {result.users.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>
    </div>
  );
}
