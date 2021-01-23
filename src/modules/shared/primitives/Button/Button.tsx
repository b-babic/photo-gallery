import clsx from 'clsx';
import { FunctionComponent, ReactElement } from 'react';

import styles from './Button.module.css';

type Props = {
  variant?: 'primary' | 'inverted';
  role?: string;
  children: string;
};

export const Button: FunctionComponent<Props> = ({
  variant = 'primary',
  role = 'button',
  children,
}: Props): ReactElement => {
  return (
    <button
      type="button"
      role={role}
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'inverted' && styles.inverted
      )}
    >
      {children}
    </button>
  );
};
