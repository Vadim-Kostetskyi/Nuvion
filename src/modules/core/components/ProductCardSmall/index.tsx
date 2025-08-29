import { FC } from 'react';
import styles from './index.module.scss';

interface ProductCardSmall {
  image: string;
  title: string;
  date: string;
  workPerformed: string;
  address: string;
  description: string[];
}

const ProductCardSmall: FC<ProductCardSmall> = ({
  image,
  title,
  date,
  workPerformed,
  address,
  description,
}) => {
  return (
    <div className={styles.productCardSmall}>
      <img src={image} alt="" />
    </div>
  );
};

export default ProductCardSmall;
