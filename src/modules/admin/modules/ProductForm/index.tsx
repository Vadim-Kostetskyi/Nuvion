import { useState, useEffect, FormEvent } from 'react';
import styles from './index.module.scss';
import { formList } from './data';
import { useTranslation } from 'react-i18next';
import slugify from 'slugify';

interface ProductFormProps {
  product?: any;
  onClose: () => void;
}

async function createProduct(formData: FormData) {
  const response = await fetch(
    'http://localhost/Nuvion-data-base/api/v1/archive/products',
    { method: 'POST', body: formData }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create product');
  }
  return response.json();
}

// async function updateProduct(id: number, formData: FormData) {
//   const response = await fetch(
//     `http://localhost/Nuvion-data-base/api/v1/archive/products/${id}`,
//     { method: 'POST', body: formData }
//   );

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.error || 'Failed to update product');
//   }
//   return response.json();
// }
async function updateProduct(id: number, formData: FormData) {
  const response = await fetch(
    `http://localhost/Nuvion-data-base/api/v1/archive/products/${id}`,
    { method: 'POST', body: formData }
  );

  const text = await response.text(); // читаємо як текст
  try {
    const data = JSON.parse(text); // пробуємо парсити JSON
    if (!response.ok) throw new Error(data.error || 'Failed to update product');
    return data;
  } catch {
    // Якщо не JSON — викидаємо текст як помилку
    throw new Error(`Server returned invalid JSON: ${text}`);
  }
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
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
      let result;
      if (product && product.id) {
        console.log(123);

        // оновлення
        result = await updateProduct(product.id, formData);
        alert(`Product updated with ID: ${result.id}`);
      } else {
        // створення
        if (!imageFile) {
          alert('Please select an image');
          return;
        }
        result = await createProduct(formData);
        alert(`Product created with ID: ${result.id}`);
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
