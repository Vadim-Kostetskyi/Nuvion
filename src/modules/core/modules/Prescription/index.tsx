import { list1, list2 } from './data';
import image1 from 'assets/svg/engineering-and-tools-22032.svg';
import image2 from 'assets/svg/installation-9494.svg';
import image3 from 'assets/svg/repairing-service-black-outline-22670.svg';
import image4 from 'assets/svg/technical-customer-support-black-outline-tools-25340.svg';
import image5 from 'assets/svg/wrench-951.svg';
import image6 from 'assets/svg/wrench-and-screwdriver-9431.svg';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const Prescription = () => {
  const { t } = useTranslation();

  const images = [image1, image2, image3, image3, image4, image5, image6];

  return (
    <section className={styles.prescription}>
      <div>
        {list1.map(({ label }, index) => (
          <a href="#" key={label}>
            <img src={images[index]} alt="" />
            <strong>{t(`prescription.${label}`)}</strong>
          </a>
        ))}
      </div>
      <div>
        {list2.map(({ label }, index) => (
          <a href="#" key={label}>
            <img src={images[index + 4]} alt="" />
            <strong>{t(`prescription.${label}`)}</strong>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Prescription;
