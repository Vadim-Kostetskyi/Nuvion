import { useTranslation } from 'react-i18next';
import LanguageSelector from 'components/LanguageSelector';
import LangLink from 'utils/LangLink';
import styles from './index.module.scss';

const HeaderNav = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.headerNavWrapper}>
      <nav className={styles.headerNav}>
        <LangLink to="">{t('header.portfolio')}</LangLink>
      </nav>
      <LanguageSelector />
    </div>
  );
};

export default HeaderNav;
