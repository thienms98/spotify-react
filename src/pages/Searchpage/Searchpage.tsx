import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Card } from 'src/components/Card';
import { TopResult } from 'src/components/TopResult';
import { Section } from 'src/components/Section';
import { Track } from 'src/components/Track';
import { result as mockResult } from './result';

import classNames from 'classnames/bind';
import styles from './Searchpage.module.scss';
const cx = classNames.bind(styles);

export default function Searchpage() {
  const [searchResult, setSearchResult] = useState(mockResult);
  const [filter, setFilter] = useState<string | null>('nulti');
  const filters = [
    {
      title: 'All',
      value: 'nulti',
    },
    {
      title: 'Songs',
      value: 'track',
    },
    {
      title: 'Artists',
      value: 'artist',
    },
    {
      title: 'Albums',
      value: 'album',
    },
    {
      title: 'Playlists',
      value: 'playlist',
    },
    {
      title: 'Podcasts & Shows',
      value: 'show',
    },
    {
      title: 'Profiles',
      value: 'user',
    },
  ];
  const { query } = useParams();

  const url = `https://spotify23.p.rapidapi.com/search/?q=${query}E&type=${filter}&offset=0&limit=10&numberOfTopResults=5`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '2c37ff9770msh38de50c5a059b0ep1eedebjsn8c2eea331b8b',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res: any) => setSearchResult(res))
      .then(() => (document.body.scrollTop = 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filter]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filters')}>
        {filters.map(({ title, value }) => {
          return (
            <div
              className={cx('item', { selected: filter === value })}
              key={value}
              onClick={() => {
                setFilter(value);
              }}
            >
              {title}
            </div>
          );
        })}
      </div>
      <section className={cx('top')}>
        <div className={cx('label')}>Top result</div>
        <TopResult data={searchResult.topResults.items[0].data} />
      </section>
      <section className={cx('songs')}>
        <div className={cx('label')}>Songs</div>
        {[...searchResult.tracks.items].splice(0, 4).map(({ data }) => {
          const track = {
            uri: data.uri,
            explicit: false,
            artists: data.artists.items,
            name: data.name,
            duration: data.duration,
            image: data.albumOfTrack.coverArt.sources.at(0) || { width: 0, height: 0, url: '' },
            album: null,
          };
          return <Track data={track} key={data.id} playHandle={() => {}} />;
        })}
      </section>

      <Section title="Featured">
        {searchResult.topResults.featured.map(({ data }) => {
          return (
            <div className={cx('item')} key={data.uri}>
              <Card data={data} />
            </div>
          );
        })}
        {[...searchResult.topResults.featured].splice(0, 2).map(({ data }) => {
          return (
            <div className={cx('item')} key={data.uri}>
              <Card data={data} />
            </div>
          );
        })}
      </Section>

      <Section title="Artists">
        {searchResult.artists.items.map(({ data }) => {
          return <Card key={data.uri?.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Albums">
        {searchResult.albums.items.map(({ data }) => {
          return <Card key={data.uri?.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Playlists">
        {searchResult.playlists.items.map(({ data }) => {
          return <Card key={data.uri?.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Podcasts">
        {searchResult.podcasts.items.map(({ data }) => {
          return <Card key={data.uri?.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Episodes">
        {searchResult.episodes.items.map(({ data }) => {
          return <Card key={data.uri?.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Profiles">
        {searchResult.users.items.map(({ data }) => {
          return <Card key={data.uri?.split(':')[2]} data={data} />;
        })}
      </Section>
    </div>
  );
}
