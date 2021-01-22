import clsx from 'clsx';
import { FunctionComponent, ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import styles from './MenuItem.module.css';

type MenuItemProps = {
  to: string;
  position: number;
  label: string;
  description: string;
};

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  to,
  position,
  label,
  description,
}: MenuItemProps): ReactElement => {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <li className={clsx(styles.item, match && styles.active)}>
      <Link to={to} className={styles.link} aria-label={description}>
        <span className={styles.num}>{position}</span>
        {label}
      </Link>
    </li>
  );
};
