import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneCall from 'assets/svg/PhoneCall';
import Mail from 'assets/svg/Mail';
import styles from './index.module.scss';

interface MailProneProps {
  mail?: boolean;
}

const MailProne: FC<MailProneProps> = ({ mail }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      {mail ? (
        <div>
          <h3>{t('footer.orSendEmail')}</h3>
          <div>
            <Mail />
            <span>info@nuvion.nl</span>
          </div>
        </div>
      ) : (
        <div>
          <h3>{t('footer.callUs')}</h3>
          <div>
            <PhoneCall />
            <span>020 - 634 36 38</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailProne;
