import { products } from 'products';
import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import styles from './index.module.scss';

const LatestProjects = () => {
  return (
    <section className={styles.latestProjects}>
      <div>
        <h2>Laatste projecten</h2>
        <p>
          Ontdek meer over onze projecten en mooie werken in Noord- en Zuid
          Holland.
        </p>
        <a href="#" className={styles.link}>
          <span>Alle projecten</span>
        </a>
      </div>
      <div className={styles.products}>
        {products
          .slice(-4)
          .reverse()
          .map((props) => (
            <ProductCardSmall {...props} latest={true} />
          ))}
      </div>
    </section>
  );
};

export default LatestProjects;
