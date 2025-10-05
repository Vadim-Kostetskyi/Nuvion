import { FC, useCallback, useEffect, useState } from 'react';
import PicturePanel from '../componenst/PicturePanel';
import ArrowSwiperCard from 'assets/svg/ArrowSwiperCard';
import styles from './index.module.scss';

export interface ProductDetailsGalleryProps {
  imagesData: string[];
  title?: string;
}

const ProductCardGalery: FC<ProductDetailsGalleryProps> = ({
  imagesData,
  title,
}) => {
  const [images, setImages] = useState<string[]>();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleImageClick = () => {
    if (images && images[0]) {
      setIsOpen(true);
    }
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.placeholder}></div>
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
          onClick={handleImageClick}
        />
        {isOpen && (
          <div className={styles.modal} onClick={handleClose}>
            <img
              src={images && images[0]}
              alt={title}
              className={styles.modalImage}
            />
          </div>
        )}

        {images && images?.length < 2 ? null : (
          <div className={styles.arrowsWrapper}>
            <button className={styles.itemArrow} onClick={onPrevImage}>
              <ArrowSwiperCard
                className={`${styles.arrow} ${styles.arrowPrev}`}
              />
            </button>
            <button className={styles.itemArrow} onClick={onNextImage}>
              <ArrowSwiperCard className={styles.arrow} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardGalery;
