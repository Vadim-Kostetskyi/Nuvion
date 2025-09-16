import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { useGetProductBySlugQuery } from 'storeRedux/slyse/productsApi';
// import { parseDescription } from 'utils/text';
import styles from './index.module.scss';
import { productInfoList } from './data';
import ProductInfo from 'modules/product/componenst/ProductInfo';

const ProductCard = () => {
  const { productSlug } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductBySlugQuery(productSlug || '');

  const [loaded, setLoaded] = useState(false);

  // const { t } = useTranslation();

  if (isLoading) return <div>...</div>;
  if (isError || !product) return <div>Data loading error</div>;

  const { title, image, date, work_performed, description, address } = product;
  const productInfoListText = [date, work_performed, address];

  return (
    <div className={styles.productCard}>
      <img
        src={image}
        alt=""
        className={`${styles.image} ${loaded ? styles.loaded : ''}`}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{title}</h1>
        <div>
          {productInfoList.map(({ image }, index) => (
            <ProductInfo image={image} text={productInfoListText[index]} />
          ))}
        </div>
        <div className={styles.descriptionText}>
          {/* {parseDescription(description)} */}
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
