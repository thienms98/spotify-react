import { Card } from 'src/components/Card';
import { Section } from 'src/components/Section';
import { result } from './result';

import classNames from 'classnames/bind';
import styles from './Searchpage.module.scss';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
const cx = classNames.bind(styles);

export default function Searchpage() {
  return (
    <div className={cx('wrapper')}>
      <section title="Top result">
        <div className={cx('title')}>Top result</div>
        {result.topResults.items.map(({ data }) => {
          return (
            <div className={cx('item')} key={data.id}>
              {data.name}
            </div>
          );
        })}
      </section>

      {/* <Section title='Featured'>
        {result.topResults.featured.map(({ data }) => {
          return (
            <div className={cx('item')} key={data.uri}>
              <Card data={data} />
            </div>
          );
        })}
      {/* </Section> */}
      {/* {Object.keys(result).map((key: string) => {
        const {items}= result[key]
        return <Section title={key} expandable={result[key].items.length > 6>
          {items.map(({data}) => {
            return <Card key={data.uri.split(':')[2]} data={data} />;
          }</div>)}
        </Section>
      })} */}

      {/* <Section title="Artists" expandable={result.artists.items.length > 6}>
        {result.artists.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section>

      <Section title="Albums" expandable={result.albums.items.length > 6}>
        {result.albums.items.map(({ data }) => {
          return <Card key={data.uri.split(':')[2]} data={data} />;
        })}
      </Section> */}

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
