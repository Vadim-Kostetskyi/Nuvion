import { products } from 'products';
import ProductCardSmall from 'modules/core/components/ProductCardSmall';
import styles from './index.module.scss';
import ButtonLink from 'components/ButtonLink';

const LatestProjects = () => {
  return (
    <section className={styles.latestProjects}>
      <div>
        <h2>Laatste projecten</h2>
        <p>
          Ontdek meer over onze projecten en mooie werken in Noord- en Zuid
          Holland.
        </p>
        <ButtonLink title="Alle projecten" link="#" />
      </div>
      <div className={styles.products}>
        {products
          .slice(-4)
          .reverse()
          .map((props, index) => (
            <ProductCardSmall {...props} latest={true} key={index} />
          ))}
      </div>
    </section>
  );
};

export default LatestProjects;
