import React from 'react';
import Image from 'next/image';

import girl from '@/public/images/girl.png';
import logo from '@/public/images/logo.png';
import vk from '@/public/images/icons/vk.svg';
import tg from '@/public/images/icons/tg.svg';

import styles from './hat.module.scss';

const Hat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image className={styles.img} src={girl} alt="girl" placeholder="blur" priority={true} />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>
          <Image className={styles.logo} src={logo} alt="logo" placeholder="blur" priority={true} />
          <h1>Учитель начальных классов</h1>
        </div>
        <div className={styles.buttons}>
          <p className={styles.exp}>Более 20 лет стажа</p>
          <Image className={styles.icon} src={vk} alt="vk" placeholder="blur" loading="lazy" />
          <Image className={styles.icon} src={tg} alt="tg" placeholder="blur" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hat;
