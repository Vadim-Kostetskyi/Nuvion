import { FC } from 'react';
import styles from './index.module.scss';

interface ProductCardSmall {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  work_performed?: string;
  address?: string;
  language: string;
  description: string;
  latest?: boolean;
  className?: string;
}

const ProductCardSmall: FC<ProductCardSmall> = ({
  image,
  title,
  date,
  description,
  latest,
  className,
}) => {
  return (
    <div
      // className={latest ? styles.productCardLatest : styles.productCardSmall}
      className={latest ? styles.productCardLatest : styles[className || '']}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCardSmall;
