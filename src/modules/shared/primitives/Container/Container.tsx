import { FunctionComponent, ReactElement } from 'react';

import styles from './Container.module.css';

interface Props {
  children: ReactElement;
}

export const Container: FunctionComponent<Props> = ({ children }: Props): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};
