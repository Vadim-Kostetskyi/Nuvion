import LanguageSelector from 'modules/core/components/LanguageSelector';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <LanguageSelector />
      {t('kaka')}
    </header>
  );
};

export default Header;
