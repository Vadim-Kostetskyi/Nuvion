import { useState, FormEvent } from 'react';
import styles from './index.module.scss';
import { formList } from './data';

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

interface ProductFormProps {
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target.title.value);

    if (!imageFile) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', slug);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('image', imageFile);

    // try {
    //   const result = await createProduct(formData);
    //   console.log('Product created:', result);
    //   alert(`Product created with ID: ${result.id}`);
    //   onClose();
    // } catch (err) {
    //   console.error(err);
    //   alert('Failed to create product');
    // }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Create Product</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {formList.map(({ title }) => (
            <input
              type="text"
              className={styles.input}
              name={title}
              placeholder={title}
            />
          ))}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImageFile(e.target.files ? e.target.files[0] : null)
            }
          />
          <textarea name="" placeholder="description" rows={15}></textarea>
          <button type="submit">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
