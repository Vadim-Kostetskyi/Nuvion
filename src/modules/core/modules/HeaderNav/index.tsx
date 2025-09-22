import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import LangLink from 'utils/LangLink';

const HeaderNav = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.headerNav}>
      <LangLink to="">{t('header.portfolio')}</LangLink>
    </nav>
  );
};

export default HeaderNav;
