import { FC, useCallback, useEffect, useState } from 'react';
// import ArrowSwiperCard from 'assets/svgs/ArrowSwiperCard';
// import PicturePanel from 'modules/product/components/ProductDetailsGalleryPanel';
import styles from './index.module.scss';
import PicturePanel from '../componenst/PicturePanel';

export interface ProductDetailsGalleryProps {
  imagesData: string[];
  title?: string;
}

const ProductCardGalery: FC<ProductDetailsGalleryProps> = ({
  imagesData,
  title,
}) => {
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    setImages(imagesData);
  }, [imagesData]);

  const moveImageToStart = useCallback(
    (index: number) => () => {
      if (!images || index < 0 || index >= images.length - 1) {
        return;
      }

      const clickedImage = images[index + 1];
      const startIndex = images.indexOf(clickedImage);

      if (startIndex === -1) {
        return;
      }

      const rotatedImages = [
        ...images.slice(startIndex),
        ...images.slice(0, startIndex),
      ];

      setImages(rotatedImages);
    },
    [images]
  );

  const onNextImage = useCallback(() => {
    if (!images || images.length <= 1) {
      return;
    }

    const [firstElement, ...restOfArray] = images;
    const newArray = [...restOfArray, firstElement];
    setImages(newArray);
  }, [images]);

  const onPrevImage = useCallback(() => {
    if (!images || images.length <= 1) {
      return;
    }

    const lastElement = images[images.length - 1];
    const restOfArray = images.slice(0, -1);
    const newArray = [lastElement, ...restOfArray];
    setImages(newArray);
  }, [images]);

  return (
    <div className={styles.wrapper}>
      <PicturePanel
        images={images?.slice(1)}
        choosePicture={moveImageToStart}
        cardName={title || ''}
      />
      <div className={styles.largeImageWrapper}>
        <img
          className={styles.largeImage}
          src={images && images[0]}
          alt={title}
        />
        <div className={styles.arrowsWrapper}>
          <button className={styles.itemArrow} onClick={onPrevImage}>
            {/* <ArrowSwiperCard
              className={`${styles.arrow} ${styles.arrowPrev}`}
            /> */}
          </button>
          <button className={styles.itemArrow} onClick={onNextImage}>
            {/* <ArrowSwiperCard className={styles.arrow} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGalery;
