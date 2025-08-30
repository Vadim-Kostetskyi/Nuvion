import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const Copyright = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.copyright}>
      {t('copyright')} {t('Privacy')}
    </div>
  );
};

export default Copyright;
