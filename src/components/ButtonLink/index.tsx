import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

interface ButtonLinkProps {
  title: string;
  link: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ title, link }) => {
  return (
    <Link to={link} className={styles.link}>
      {title}
    </Link>
  );
};

export default ButtonLink;
