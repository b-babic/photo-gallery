import { FunctionComponent, ReactElement } from 'react';

import styles from './Layout.module.css';

interface Props {
  children: ReactElement;
}

export const Layout: FunctionComponent<Props> = ({ children }: Props): ReactElement => {
  return (
    <div role="document" className={styles.layout}>
      {children}
    </div>
  );
};
