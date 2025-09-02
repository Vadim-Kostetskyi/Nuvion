import { FC } from 'react';
import styles from './index.module.scss';

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export default Button;
