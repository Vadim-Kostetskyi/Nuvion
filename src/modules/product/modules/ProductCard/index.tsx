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

  const { title, images, date, work_performed, description, address } = product;
  const productInfoListText = [date, work_performed, address];
  console.log(loaded);

  return (
    <div className={styles.productCard}>
      <div>
        <img
          src={images[0]}
          alt=""
          className={`${styles.image} ${loaded ? styles.loaded : ''}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.infoBox}>
          {productInfoList.map(({ image }, index) => (
            <ProductInfo
              image={image}
              text={productInfoListText[index] || ''}
            />
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
