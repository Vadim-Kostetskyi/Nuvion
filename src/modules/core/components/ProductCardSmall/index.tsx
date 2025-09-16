import { FC } from 'react';
import styles from './index.module.scss';

interface ProductCardSmall {
  image: string;
  title: string;
  date: string;
  // workPerformed: string;
  // address: string;
  description: string[];
  latest?: boolean;
}

const ProductCardSmall: FC<ProductCardSmall> = ({
  image,
  title,
  date,
  description,
  latest,
}) => {
  return (
    <div
      className={latest ? styles.productCardLatest : styles.productCardSmall}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        {/* <div className={styles.line}></div> */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCardSmall;
