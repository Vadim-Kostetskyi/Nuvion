import { useTranslation } from 'react-i18next';
import { links } from './data';
import MailProne from '../MailProne';
import Social from '../Social';
import styles from './index.module.scss';

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footerInfo}>
      <Social />
      <div>
        <h2>Nuvion </h2>
        {links.map(({ label }) => (
          <p>{t(`footer.${label}`)}</p>
        ))}
      </div>
      <div>
        <MailProne />
        <MailProne mail={true} />
      </div>
    </div>
  );
};

export default FooterInfo;
