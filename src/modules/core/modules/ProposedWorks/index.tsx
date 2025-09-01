import { proposedWorksList } from './data';
import styles from './index.module.scss';

const ProposedWorks = () => {
  return (
    <section className={styles.proposedWorks}>
      {proposedWorksList.map(({ image, title, description, link }) => (
        <a className={styles.work} href={link}>
          <img src={image} alt="" />
          <h5>{title}</h5>
          <p>{description}</p>
          <a href={link}>
            <span>Lees meer</span>
          </a>
        </a>
      ))}
    </section>
  );
};

export default ProposedWorks;
