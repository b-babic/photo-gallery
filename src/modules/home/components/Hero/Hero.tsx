import clsx from 'clsx';
import { FunctionComponent, ReactElement } from 'react';

import { Avatar } from 'modules/shared/elements/Avatar/Avatar';
import { Button } from 'modules/shared/primitives/Button/Button';

import AvatarImage from 'modules/home/assets/avatar.jpg';
import { ReactComponent as VerifiedIcon } from 'assets/images/badge.svg';
import { ReactComponent as LocationIcon } from 'assets/images/pin.svg';
import { ReactComponent as LinkIcon } from 'assets/images/link.svg';

import { InfoIcon } from '../InfoIcon/InfoIcon';

import styles from './Hero.module.css';

interface Props {}

export const Hero: FunctionComponent<Props> = (): ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <Avatar src={AvatarImage} description="User profile avatar" />

        <div>
          <div className={styles.name}>
            <h1 className={clsx('h2', styles.title)}>Caz Yorkston</h1>

            <VerifiedIcon />

            <Button>Follow</Button>
            <Button variant="inverted">Message</Button>
          </div>

          <address className={styles.address}>
            <InfoIcon icon={<LocationIcon />} title="Manas, Russia" />
            <InfoIcon icon={<LinkIcon />} href="https://website.com/userid" />
          </address>

          <p className={styles.description}>
            Born and rased in Canada. Passionate for foor and traveling.Love good coffee. This website is my photo
            journal. My creative outled. Enjoy!
          </p>

          <div className={styles.stats}>
            <span>#9</span>
            <span>123/212</span>
            <span>72 streak</span>
          </div>
        </div>
      </div>
    </section>
  );
};
