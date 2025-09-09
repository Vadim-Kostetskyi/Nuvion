import { useTranslation } from 'react-i18next';
import MailProne from '../MailProne';
import Social from '../Social';
import Copyright from '../Copyright';
import { links } from './data';
import { companyName } from 'utils/constants';
import styles from './index.module.scss';

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footerInfo}>
      <div>
        <Social />
        <div>
          <h3>{companyName}</h3>
          {links.map(({ label }) => (
            <p key={label}>{t(`footer.${label}`)}</p>
          ))}
        </div>
        <div>
          <MailProne />
          <MailProne mail={true} />
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default FooterInfo;
