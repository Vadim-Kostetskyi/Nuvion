import { useTranslation } from 'react-i18next';
import photo from 'assets/IMG_6151.jpeg';
import styles from './index.module.scss';
import ButtonLink from 'components/ButtonLink';

const Representation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.representation}>
      <div>
        <div className={styles.imageWrapper}>
          <img
            src={photo}
            alt="swimming pool with unfinished roof"
            loading="lazy"
          />
        </div>
        <div className={styles.textBox}>
          <h2>{t('representation.title')}</h2>
          <div>
            <div>
              <strong>{t('representation.text1')}</strong>
            </div>
            <div>
              <p>{t('representation.text2')}</p>
              <p>{t('representation.text3')}</p>
              <ButtonLink
                title={t('representation.moreAbout')}
                link="/about-us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Representation;
