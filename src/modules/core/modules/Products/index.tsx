import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import styles from './index.module.scss';
import { useGetProductsQuery } from 'storeRedux/slyse/productsApi';

const Products = () => {
  const { data } = useGetProductsQuery();
  console.log(data);

  return (
    <div className={styles.productsWrapper}>
      <div className={styles.products}>
        <div>
          {Array.isArray(data) &&
            data.map((product) => (
              <ProductCardSmall
                key={product.id}
                {...product}
                className="productCardSmall"
              />
            ))}
          {Array.isArray(data) &&
            data.map((product) => (
              <ProductCardSmall
                key={product.id}
                {...product}
                className="productCardOverlay"
              />
            ))}
          {Array.isArray(data) &&
            data.map((product) => (
              <ProductCardSmall
                key={product.id}
                {...product}
                className="productCardMinimal"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
