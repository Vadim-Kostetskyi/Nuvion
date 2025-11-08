import { FC } from 'react';
import styles from './index.module.scss';

export interface ProductDetailsGalleryPanelProps {
  cardName: string;
  images?: string[];
  choosePicture: (index: number) => () => void;
}

const PicturePanel: FC<ProductDetailsGalleryPanelProps> = ({
  images,
  choosePicture,
  cardName,
}) => (
  <div className={styles.imageWrapper}>
    {images?.map((img, index) => (
      <button
        key={img}
        className={styles.imageButton}
        onClick={choosePicture(index)}
      >
        <img className={styles.image} src={img} alt={cardName} loading="lazy" />
      </button>
    ))}
  </div>
);

export default PicturePanel;
