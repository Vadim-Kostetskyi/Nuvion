import { useTranslation } from 'react-i18next';
import photo from 'assets/20231013_161555crop-480x480.jpg';
import styles from './index.module.scss';
import ButtonLink from 'components/ButtonLink';

const Representation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.representation}>
      <div>
        <div className={styles.imageWrapper}>
          <img src={photo} alt="" />
        </div>
        <div>
          <h2>{t('representation.title')}</h2>
          <strong>{t('representation.text1')}</strong>
          <p>{t('representation.text2')}</p>
          <p>{t('representation.text3')}</p>
        </div>
        <div>
          <p>{t('representation.text4')}</p>
          <p>{t('representation.text5')}</p>
          <p>{t('representation.text6')}</p>
          <ButtonLink title={t('representation.moreAbout')} link="#" />
        </div>
      </div>
    </section>
  );
};

export default Representation;
