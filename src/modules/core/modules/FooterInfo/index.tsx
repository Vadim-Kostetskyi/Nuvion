import { useTranslation } from 'react-i18next';
import { links } from './data';
import MailProne from '../MailProne';
import Social from '../Social';
import { companyName } from 'utils/constants';
import styles from './index.module.scss';

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footerInfo}>
      <Social />
      <div>
        <h3>{companyName}</h3>
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
