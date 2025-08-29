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
  description,
}) => {
  return (
    <div className={styles.productCardSmall}>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <div className={styles.line}></div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCardSmall;
