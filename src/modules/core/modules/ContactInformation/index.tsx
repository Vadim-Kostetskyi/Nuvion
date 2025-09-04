import { useTranslation } from 'react-i18next';
import Map from '../Map/insex';
import { contactDetails } from './data';
import styles from './index.module.scss';

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contactInformationWrapper}>
      <div className={styles.contactInformation}>
        <div>
          <h2>{t('contact.contactDetails')}</h2>
          {contactDetails.map(({ icon, label }) => (
            <div className={styles.iconBox}>
              <img src={icon} alt="" />
              <p>{t(label)}</p>
            </div>
          ))}
          <a href="#">
            <span>{t('contact.pleaseContactUs')}</span>
          </a>
        </div>
        <div className={styles.mapWrapper}>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
