import { useState, useEffect, FormEvent } from 'react';
import styles from './index.module.scss';
import { formList } from './data';
import { useTranslation } from 'react-i18next';
import slugify from 'slugify';
import { useSaveProductMutation } from 'storeRedux/slyse/productsApi';

interface ProductFormProps {
  product?: any;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
  const [saveProduct] = useSaveProductMutation();

  const { t } = useTranslation();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formState, setFormState] = useState<any>({});

  useEffect(() => {
    if (product) {
      setFormState(product);
    }
  }, [product]);
  console.log(formState);
  console.log(123);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeLang = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (imageFile) formData.append('image', imageFile);

    const title = formData.get('title') as string | null;
    formData.append('slug', slugify(title || '', { lower: true }));
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      if (product && product.id) {
        // create
        const data = await saveProduct({ formData, id: product?.id }).unwrap();

        alert(`Product ${product ? 'updated' : 'created'} with ID: ${data.id}`);
      } else {
        // update
        if (!imageFile) {
          alert('Please select an image');
          return;
        }
        const data = await saveProduct({ formData }).unwrap();
        alert(`Product created with ID: ${data.id}`);
      }
      onClose();
    } catch (err: any) {
      console.error(err);
      alert(`111, ${err.message}` || 'Operation failed');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{product ? t('products.edit') : t('products.create')}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {formList.map(({ title }) => (
            <input
              key={title}
              type="text"
              className={styles.input}
              name={title}
              placeholder={t(`products.${title}`)}
              value={formState[title] || ''}
              onChange={handleChange}
            />
          ))}
          <input
            name="date"
            type="date"
            value={formState.date || ''}
            onChange={handleChange}
          />
          <select
            name="language"
            value={formState.language}
            onChange={handleChangeLang}
          >
            <option value="nl">{t('dutchLang')}</option>
            <option value="en">{t('englishLang')}</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files ? e.target.files[0] : null)
            }
          />
          <textarea
            name="description"
            placeholder={t('products.description')}
            rows={15}
            value={formState.description || ''}
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            {product ? t('products.edit') : t('products.create')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
