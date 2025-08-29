import { products } from 'products';
import styles from './index.module.scss';
import ProductCardSmall from 'modules/core/components/ProductCardSmall';

const Products = () => {
  return (
    <div className={styles.productsWrapper}>
      <div className={styles.products}>
        <div>
          {products.map((props) => (
            <ProductCardSmall {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
