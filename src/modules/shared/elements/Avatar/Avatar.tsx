import { ReactElement, FunctionComponent } from 'react';

import styles from './Avatar.module.css';

interface Props {
  src: string;
  description?: string;
}

export const Avatar: FunctionComponent<Props> = ({ src, description = 'Image' }: Props): ReactElement => {
  return <img src={src} alt={description} className={styles.avatar} />;
};
