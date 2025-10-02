import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

interface ButtonLinkProps {
  title: string;
  link: string;
  className?: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ title, link, className }) => {
  return (
    <Link to={link} className={`${styles.link} ${className || ''}`}>
      {title}
    </Link>
  );
};

export default ButtonLink;
