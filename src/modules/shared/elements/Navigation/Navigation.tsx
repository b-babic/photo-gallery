import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoIcon } from 'assets/images/camera.svg';

import { Container } from 'modules/shared/primitives/Container/Container';
import { Menu } from '../Menu/Menu';

import styles from './Navigation.module.css';

interface Props {}

export const Navigation: FunctionComponent<Props> = (): ReactElement => {
  return (
    <header role="banner" className={styles.header}>
      <Container>
        <nav className={styles.inner}>
          <Link to="/" className={styles.logo} role="link" aria-label="Link to homepage">
            <LogoIcon />
          </Link>

          <Menu />
        </nav>
      </Container>
    </header>
  );
};
