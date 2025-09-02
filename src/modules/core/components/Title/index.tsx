import { FC } from 'react';
import styles from './index.module.scss';

export interface TitleProps {
  title: string;
  text: string;
}

const Title: FC<TitleProps> = ({ title, text }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </div>
);

export default Title;
