import { FC } from 'react';
import PhoneCall from 'assets/svg/PhoneCall';
import styles from './index.module.scss';
import Mail from 'assets/svg/Mail';

interface MailProneProps {
  mail?: boolean;
}

const MailProne: FC<MailProneProps> = ({ mail }) => {
  return (
    <div className={styles.contact}>
      {mail ? (
        <div>
          <h3>Або надішліть електронного листа</h3>
          <div>
            <Mail />
            <span>info@nuvion.nl</span>
          </div>
        </div>
      ) : (
        <div>
          <h3>Зателефонуйте нам</h3>
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
