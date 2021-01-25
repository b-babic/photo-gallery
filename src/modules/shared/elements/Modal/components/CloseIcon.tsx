import React, { FunctionComponent, ReactElement } from 'react';

import styles from './CloseIcon.module.css';

interface Props {
  id?: string;
  closeIcon?: React.ReactNode;
  onClick: () => void;
}

export const CloseIcon: FunctionComponent<Props> = ({ id, closeIcon, onClick }: Props): ReactElement => (
  <button type="button" id={id} className={styles.close} onClick={onClick} data-testid="close-button">
    {closeIcon || (
      <svg className={styles.icon} width={18} height={18} viewBox="0 0 36 36" data-testid="close-icon">
        <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />
      </svg>
    )}
  </button>
);
