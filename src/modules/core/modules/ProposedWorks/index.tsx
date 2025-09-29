import { useTranslation } from 'react-i18next';
import { proposedWorksList } from './data';
import styles from './index.module.scss';

const ProposedWorks = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.proposedWorks}>
      {proposedWorksList.map(({ image, title, description, link }) => (
        // <a className={styles.work} href={link} key={title}>
        <div className={styles.work}>
          <img src={image} alt="" />
          <h5>{t(`proposedWorks.${title}`)}</h5>
          <p>{t(`proposedWorks.${description}`)}</p>
          {/* <span>{t('proposedWorks.readMore')}</span> */}
        </div>
        // {/* </a> */}
      ))}
    </section>
  );
};

export default ProposedWorks;
