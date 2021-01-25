import clsx from 'clsx';
import { FunctionComponent, ReactElement } from 'react';

import { Filters } from 'modules/home/components/Filters/Filters';

import styles from './Hero.module.css';

interface Props {}

export const Hero: FunctionComponent<Props> = (): ReactElement => {
  return (
    <section className={clsx('section', styles.hero)}>
      <h1 className={clsx('h2', styles.title)}>Be amazed with collections</h1>

      <p className={styles.description}>
        It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it
        was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of
        Darkness, it was the spring of hope, it was the winter of despair.
      </p>

      <Filters />
    </section>
  );
};
