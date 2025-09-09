import { list1, list2 } from './data';
import image from 'assets/Ontwerp-zonder-titel-55-150x150.png';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const Prescription = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.prescription}>
      <div>
        {list1.map(({ label }) => (
          <a href="#" key={label}>
            <img src={image} alt="" />
            <strong>{t(`prescription.${label}`)}</strong>
          </a>
        ))}
      </div>
      <div>
        {list2.map(({ label }) => (
          <a href="#" key={label}>
            <img src={image} alt="" />
            <strong>{t(`prescription.${label}`)}</strong>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Prescription;
