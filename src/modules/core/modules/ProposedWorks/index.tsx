import { useTranslation } from 'react-i18next';
import { proposedWorksList } from './data';
import styles from './index.module.scss';

const ProposedWorks = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.proposedWorks}>
      {proposedWorksList.map(({ image, title, description, link }) => (
        <a className={styles.work} href={link}>
          <img src={image} alt="" />
          <h5>{t(`proposedWorks.${title}`)}</h5>
          <p>{t(`proposedWorks.${description}`)}</p>
          <a href={link}>
            <span>{t('proposedWorks.readMore')}</span>
          </a>
        </a>
      ))}
    </section>
  );
};

export default ProposedWorks;
