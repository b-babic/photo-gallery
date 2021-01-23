import { ReactNode, FunctionComponent, ReactElement } from 'react';

import styles from './InfoIcon.module.css';

interface Props {
  icon: ReactNode;
  title?: string;
  href?: string;
}

export const InfoIcon: FunctionComponent<Props> = ({ icon, title, href }: Props): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {icon}
      {href && (
        <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
          {title ?? href}
        </a>
      )}
      {!href && <p className={styles.title}>{title}</p>}
    </div>
  );
};
