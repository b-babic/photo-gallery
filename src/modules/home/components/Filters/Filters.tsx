import { FunctionComponent, ReactElement } from 'react';

import styles from './Filters.module.css';

interface Props {}

export const Filters: FunctionComponent<Props> = (): ReactElement => {
  return (
    <section className={styles.filters}>
      <div className={styles.inner}>
        <span className={styles.stat}>
          1,567 <b>Photos</b>
        </span>
        <span className={styles.stat}>
          12 <b>Galleries</b>
        </span>
        <span className={styles.stat}>Statistics</span>
      </div>
    </section>
  );
};
