import { FunctionComponent, ReactElement, ReactNode } from 'react';

import styles from './Container.module.css';

interface Props {
  children: ReactNode;
}

export const Container: FunctionComponent<Props> = ({ children }: Props): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};
