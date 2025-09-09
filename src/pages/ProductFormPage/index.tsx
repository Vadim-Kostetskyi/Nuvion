import React, { useState } from 'react';

export async function createProduct(formData: FormData) {
  const response = await fetch(
    'http://localhost/Nuvion-data-base/api/v1/archive/products',
    {
      method: 'POST',
      body: formData, // передаємо FormData, не JSON
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create product');
  }

  return response.json();
}

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

    try {
      const result = await createProduct(formData);
      console.log('Product created:', result);
      alert(`Product created with ID: ${result.id}`);
    } catch (err) {
      console.error(err);
      alert('Failed to create product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Slug"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
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
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
