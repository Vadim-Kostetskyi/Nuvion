import { FC } from 'react';
import LangLink from 'utils/LangLink';
import styles from './index.module.scss';

interface ButtonLinkProps {
  title: string;
  link: string;
  className?: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ title, link, className }) => (
  <LangLink to={link} className={`${styles.link} ${className || ''}`}>
    {title}
  </LangLink>
);

export default ButtonLink;
