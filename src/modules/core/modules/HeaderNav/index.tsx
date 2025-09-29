import { useTranslation } from 'react-i18next';
import LanguageSelector from 'components/LanguageSelector';
import LangLink from 'utils/LangLink';
import { links } from './links';
import styles from './index.module.scss';

const HeaderNav = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.headerNavWrapper}>
      <nav className={styles.headerNav}>
        {links.map(({ title, link }) => (
          <LangLink to={link}>{t(`header.${title}`)}</LangLink>
        ))}
      </nav>
      <LanguageSelector />
    </div>
  );
};

export default HeaderNav;
