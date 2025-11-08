import { FC } from 'react';
import LangLink from 'utils/LangLink';
import styles from './index.module.scss';

interface ProductCardSmallProps {
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
}

const ProductCardSmall: FC<ProductCardSmallProps> = ({
  image,
  title,
  date,
  description,
  latest,
  slug,
}) => (
  <LangLink
    to={`/project/${slug}`}
    className={latest ? styles.productCardLatest : styles.productCardSmall}
  >
    <div>
      <img src={image} alt={title} loading="lazy" />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  </LangLink>
);

export default ProductCardSmall;
