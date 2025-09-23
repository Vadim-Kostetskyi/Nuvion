// import { useTranslation } from 'react-i18next';
import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import styles from './index.module.scss';
import { useGetProductsQuery } from 'storeRedux/slyse/productsApi';

const Products = () => {
  const { data } = useGetProductsQuery();
  // const { i18n } = useTranslation();
  // console.log(i18n.language);

  return (
    <div className={styles.productsWrapper}>
      {/* <h1>Portfolio van onze projecten</h1> */}
      <div className={styles.products}>
        <div>
          {Array.isArray(data) &&
            data.map((product) => (
              <ProductCardSmall key={product.id} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
