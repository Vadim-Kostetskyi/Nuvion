// import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

const Banner = () => {
  // const { t } = useTranslation();

  fetch('http://localhost/Nuvion-data-base/api/v1/archive/products/')
    .then(async (res) => {
      const text = await res.text();
      console.log('Server response:', text); // бачимо реальну відповідь
      try {
        const data = JSON.parse(text);
        console.log(data);
      } catch (e) {
        console.error('Invalid JSON:', e);
      }
    })
    .catch((err) => console.error('Fetch error:', err));

  return (
    <section className={styles.banner}>
      {/* <div>
        <p>{t('banner.constructionRenovation')}</p>
        <h1>{t('banner.slogan')}</h1>
        <p>{t('banner.quality')}</p>
      </div> */}
    </section>
  );
};

export default Banner;
