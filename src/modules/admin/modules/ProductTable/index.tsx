import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from 'storeRedux/slyse/productsApi';
import ProductForm from 'modules/admin/modules/ProductForm';
import LogoutButton from 'modules/admin/components/LogoutButton';
import { tablTiltes } from './data';
import pludImage from 'assets/icons/plus.png';
import backedImage from 'assets/svg/backed.svg';
import editImage from 'assets/svg/edit.svg';
import styles from './index.module.scss';

const ProjectsTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const { t } = useTranslation();

  const onOpenModal = (product?: any) => {
    if (product) setEditingProduct(product);
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  const handleDeleteProduct = async (id: number, title: string) => {
    if (!window.confirm(`Delete product "${title}"?`)) return;

    try {
      await deleteProduct(id).unwrap();
      alert(`Product "${title}" deleted`);
    } catch (err: any) {
      console.error(err);
      alert(`Failed to delete product: ${err.message || err}`);
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
      <div className={styles.logout}>
        <LogoutButton />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {tablTiltes.map(({ title }) => (
              <th key={title}>{t(`products.${title}`)}</th>
            ))}
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
                    src={item.image}
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
                      onClick={() => handleDeleteProduct(item.id, item.title)}
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
