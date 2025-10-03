import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import ButtonLink from 'components/ButtonLink';
import { useGetLaatsteProductsQuery } from 'storeRedux/slyse/productsApi';
import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

const LatestProjects = () => {
  const { data } = useGetLaatsteProductsQuery();
  const { t } = useTranslation();

  return (
    <section className={styles.latestProjects}>
      <div>
        <h2>{t('projects.latestProjects')}</h2>
        <div>
          <div className={styles.products}>
            {data?.map((props, index) => (
              <ProductCardSmall
                {...props}
                image={props.images[0]}
                latest={true}
                key={index}
              />
            ))}
          </div>
        </div>
        <ButtonLink title={t('projects.allProjects')} link="/portfolio" />
      </div>
    </section>
  );
};

export default LatestProjects;
