import { FC } from 'react';
import styles from './index.module.scss';

interface ProductInfoProps {
  image: string;
  text: string;
}

const ProductInfo: FC<ProductInfoProps> = ({ image, text }) => {
  return (
    <div className={styles.info}>
      <img src={image} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default ProductInfo;
