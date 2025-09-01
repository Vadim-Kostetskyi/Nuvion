import { list1, list2 } from './data';
import image from 'assets/Ontwerp-zonder-titel-55-150x150.png';
import styles from './index.module.scss';

const Prescription = () => {
  return (
    <section className={styles.prescription}>
      <div>
        {list1.map(({ label }) => (
          <a href="#">
            <img src={image} alt="" />
            <strong>{label}</strong>
          </a>
        ))}
      </div>
      <div>
        {list2.map(({ label }) => (
          <a href="#">
            <img src={image} alt="" />
            <strong>{label}</strong>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Prescription;
