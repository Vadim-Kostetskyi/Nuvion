import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneCall from 'assets/svg/PhoneCall';
import Mail from 'assets/svg/Mail';
import { email, phoneNumber } from 'utils/constants';
import styles from './index.module.scss';

interface MailProneProps {
  isEmail?: boolean;
  isAddress?: boolean;
}

const MailProne: FC<MailProneProps> = ({ isEmail, isAddress }) => {
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
            <Mail />
            <span>{t('address')}</span>
          </div>
        </div>
      )}
      {!isEmail && !isAddress && (
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

export default MailProne;
