import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useGetProductsQuery,
  // useDeleteProductMutation,
} from 'storeRedux/slyse/productsApi';
import pludImage from 'assets/icons/plus.png';
import ProductForm from 'modules/admin/modules/ProductForm';
import backedImage from 'assets/svg/Backed.svg';
import editImage from 'assets/svg/edit.svg';
import styles from './index.module.scss';

const ProjectsTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null); // зберігаємо продукт для редагування
  const { data } = useGetProductsQuery();
  // const [deleteProduct] = useDeleteProductMutation();
  const { t } = useTranslation();

  const onOpenModal = (product?: any) => {
    if (product) setEditingProduct(product);
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm(t('products.confirmDelete'))) {
      try {
        // await deleteProduct(id).unwrap();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.tableContainer}>
      <button className={styles.addItemBtn} onClick={() => onOpenModal()}>
        <img src={pludImage} alt="" />
      </button>
      {isModalOpen && (
        <ProductForm onClose={onCloseModal} product={editingProduct} />
      )}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('products.title')}</th>
            <th>{t('products.dateCompletion')}</th>
            <th>{t('products.image')}</th>
            <th>{t('products.work_performed')}</th>
            <th>{t('products.address')}</th>
            <th>{t('products.description')}</th>
            <th>{t('products.actions')}</th> {/* новий стовпець */}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>
                  <img
                    src={`http://localhost/Nuvion-data-base${item.image}`}
                    alt={item.title}
                    className={styles.image}
                  />
                </td>
                <td>{item.work_performed}</td>
                <td>{item.address}</td>
                <td>{item.description}</td>
                <td className={styles.funcButtons}>
                  <div>
                    <button
                      className={styles.editBtn}
                      onClick={() => onOpenModal(item)}
                    >
                      <img src={editImage} alt="edit" />
                    </button>
                    <button
                      className={styles.deleteBtn}
                      // onClick={() => handleDelete(item.id)}
                    >
                      <img src={backedImage} alt="delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
