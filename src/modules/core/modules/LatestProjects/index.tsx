// import { products } from 'products';
import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import ButtonLink from 'components/ButtonLink';
import { useGetLaatsteProductsQuery } from 'storeRedux/slyse/productsApi';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const LatestProjects = () => {
  const { data, error } = useGetLaatsteProductsQuery();
  const { t } = useTranslation();
  console.log(error);

  return (
    <section className={styles.latestProjects}>
      <h2>{t('projects.latestProjects')}</h2>
      <div>
        <div className={styles.products}>
          {data?.map((props, index) => (
            <ProductCardSmall {...props} latest={true} key={index} />
          ))}
        </div>
      </div>
      <ButtonLink title={t('projects.allProjects')} link="#" />
    </section>
  );
};

export default LatestProjects;
