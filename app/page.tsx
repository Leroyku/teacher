import type { Metadata } from 'next';
import Image from 'next/image';

import Hat from './components/hat/hat';

import styles from './Home.module.scss';

export const metadata: Metadata = {
  title: 'Ася Кумбрасьева',
  description:
    'Меня зовут Кумбрасьева Ася Евгеньевна. Мой педагогический стаж - 21 год. Многие мои воспитанники уже окончили школу и теперь обучаются в других учебных заведениях.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hat />
    </main>
  );
}
