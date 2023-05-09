import { Card } from 'src/components/Card';
import { Section } from 'src/components/Section';
import { data } from './data';

import classNames from 'classnames/bind';
import styles from './Homepage.module.scss';
const cx = classNames.bind(styles);

export default function Homepage() {
  return (
    <div className={cx('wrapper')}>
      <Section title="Today Mix" expandable={true}>
        {data.map((item: any) => {
          return <Card key={item.id} data={item} />;
        })}
      </Section>
    </div>
  );
}
