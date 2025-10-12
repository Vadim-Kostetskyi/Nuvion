import { useTranslation } from 'react-i18next';
import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import styles from './index.module.scss';
import { useGetProductsQuery } from 'storeRedux/slyse/productsApi';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const { t } = useTranslation();
  // console.log(i18n.language);

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.titleBox}>
        <h1>{t('portfolio.portfolioOf...')}</h1>
      </div>

      <div className={styles.products}>
        {isLoading ? (
          <div className={styles.skeletonWrapper}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}></div>
            ))}
          </div>
        ) : (
          <div>
            {Array.isArray(data) &&
              data.map((product) => (
                <ProductCardSmall
                  key={product.id}
                  {...product}
                  image={product.images[0]}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
