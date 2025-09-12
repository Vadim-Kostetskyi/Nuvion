import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface Project {
  title: string;
  slug: string;
  date: string;
  image: string;
  work_performed: string;
  address: string;
  description: string;
}

const ProjectsTable: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch('http://localhost:5000/api/projects'); // твій бекенд
    //     const data = await res.json();
    //     setProjects(data);
    //   } catch (err) {
    //     console.error('Помилка при отриманні даних:', err);
    //   }
    // };
    // fetchData();
    fetch('http://localhost/Nuvion-data-base/api/v1/archive/products/')
      .then(async (res) => {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          setProjects(data);
          console.log(data);
        } catch (e) {
          console.error('Invalid JSON:', e);
        }
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div className={styles.tableContainer}>
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
          {projects.map((item, i) => (
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
