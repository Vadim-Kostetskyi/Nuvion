import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from 'components/LanguageSelector';
import LangLink from 'utils/LangLink';
import { links } from './links';
import styles from './index.module.scss';

interface HeaderNavProps {
  isMobile?: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <div
      className={
        isMobile ? styles.headerNavWrapperMobile : styles.headerNavWrapper
      }
    >
      <nav className={styles.headerNav}>
        {links.map(({ title, link }) => (
          <LangLink to={link}>{t(`header.${title}`)}</LangLink>
        ))}
      </nav>
      <LanguageSelector isMobile={isMobile} />
    </div>
  );
};

export default HeaderNav;
