import React, { useState } from 'react';
import { useGetProductsQuery } from 'storeRedux/slyse/productsApi';
import pludImage from 'assets/icons/plus.png';
import ProductForm from 'modules/admin/modules/ProductForm';
import styles from './index.module.scss';

const ProjectsTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetProductsQuery();

  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.tableContainer}>
      <button className={styles.addItemBtn} onClick={onOpenModal}>
        <img src={pludImage} alt="" />
      </button>
      {isModalOpen && <ProductForm onClose={onCloseModal} />}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Назва</th>
            {/* <th>Slug</th> */}
            <th>Дата виконання</th>
            <th>Зображення</th>
            <th>Виконані роботи</th>
            <th>Адреса</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>
                {/* <td>{item.slug}</td> */}
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
