import type { Metadata } from 'next';
import Image from 'next/image';

import asya from '@/public/images/Home/asya.jpg';
import gramota from '@/public/images/Home/gramota.jpg';

import styles from './Home.module.scss';

export const metadata: Metadata = {
  title: 'Ася Кумбрасьева',
  description:
    'Меня зовут Кумбрасьева Ася Евгеньевна. Мой педагогический стаж - 21 год. Многие мои воспитанники уже окончили школу и теперь обучаются в других учебных заведениях.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top_container}>
        <div className={styles.image}>
          <Image
            className={styles.img}
            src={asya}
            alt="Кумбрасьева Ася Евгеньевна"
            priority={true}
            placeholder="blur"
          />
        </div>
        <div className={styles.top_text}>
          <h1 className={styles.name}>Ася Кумбрасьева</h1>
          <h2 className={styles.subtitle}>учитель начальных классов</h2>
          <p className={styles.description}>
            Меня зовут Кумбрасьева Ася Евгеньевна. Мой педагогический стаж - 21 год.
            <br />
            <br /> - В 1993 году я закончила Дзержинское педагогическое училище и 6 лет проработала
            воспитателем детского сада.
            <br /> - В 2007 году я пришла работать в Православную гимназию воспитателем группы
            продленного дня. В этом же году я поступила в Нижегородский педагогический институт.
            <br /> - В гимназии я работаю уже 16 лет, 12 лет - учителем начальных классов. Все это
            время занимаюсь с детьми на подготовительных курсах "Я&nbsp;-&nbsp;будущий ученик".
            <br />
            <br />
            Многие мои воспитанники уже окончили школу и теперь обучаются в других учебных
            заведениях. Как приятно, встретив на улице своих бывших учащихся или их родителей,
            слышать слова благодарности. Победы моих детей, блеск их глаз вдохновляют меня и не дают
            устать от своей работы.
          </p>
        </div>
      </div>
      <div className={styles.middle_container}>
        <p className={styles.middle_description}>
          В 2023 году я получила Почетную грамоту Минпросвещения России за многолетний
          добросовестный труд и значительные заслуги в сфере образования. И вошла в финал
          регионального этапа конкурса «Учитель&nbsp;года&nbsp;России&nbsp;-&nbsp;2023».
          <br />
          <br />
          Это было невероятное признание моей работы и преданности образованию. Участие в финале
          конкурса стало для меня не только почётным, но и вдохновляющим опытом, который я с
          гордостью разделяла с коллегами и учениками.
        </p>
        <div className={styles.middle_image}>
          <Image
            src={gramota}
            alt="Кумбрасьева Ася Евгеньевна Вречуние Грамоты"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </main>
  );
}
