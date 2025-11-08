import { FC } from 'react';
import styles from './index.module.scss';

interface ProductInfoProps {
  image: string;
  text: string;
}

const ProductInfo: FC<ProductInfoProps> = ({ image, text }) => {
  const items = text
    .split(/(?=•)/)
    .map((item) => item.trim())
    .filter(Boolean);

  console.log(items);

  return (
    <div className={styles.info}>
      <img src={image} alt={text} loading="lazy" />
      <div className={styles.list}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
