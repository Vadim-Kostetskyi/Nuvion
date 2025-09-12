import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneCall from 'assets/svg/PhoneCall';
import Mail from 'assets/svg/Mail';
import locationIcon from 'assets/icons/locationWhite.png';
import { email, phoneNumber } from 'utils/constants';
import styles from './index.module.scss';

interface ContactsProps {
  isPhone?: boolean;
  isEmail?: boolean;
  isAddress?: boolean;
}

const Contacts: FC<ContactsProps> = ({ isEmail, isAddress, isPhone }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      {isEmail && (
        <div>
          <h3>{t('footer.orSendEmail')}</h3>
          <div>
            <Mail />
            <span>{email}</span>
          </div>
        </div>
      )}
      {isAddress && (
        <div>
          <h3>{t('footer.ourAddress')}</h3>
          <div>
            <img src={locationIcon} alt="location" />
            <span>{t('address')}</span>
          </div>
        </div>
      )}
      {isPhone && (
        <div>
          <h3>{t('footer.callUs')}</h3>
          <div>
            <PhoneCall />
            <span>{phoneNumber}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
