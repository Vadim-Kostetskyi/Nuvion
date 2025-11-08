import React from 'react';
import styles from './index.module.scss';

const CookiePolicyPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cookie Policy</h1>

      <p className={styles.text}>
        Our website uses cookies to improve your browsing experience. Cookies
        help us analyze traffic, remember your preferences, and provide
        personalized content.
      </p>

      <h2 className={styles.subtitle}>1. Types of Cookies We Use</h2>
      <ul className={styles.list}>
        <li>
          <strong>Necessary cookies:</strong> These are essential for the
          website to function properly.
        </li>
        <li>
          <strong>Analytics cookies:</strong> Help us understand how visitors
          interact with the website.
        </li>
        <li>
          <strong>Functional cookies:</strong> Remember your settings and
          preferences.
        </li>
        <li>
          <strong>Marketing cookies:</strong> Used to display relevant ads and
          track campaigns.
        </li>
      </ul>

      <h2 className={styles.subtitle}>2. Managing Cookies</h2>
      <p className={styles.text}>
        You can choose to disable cookies in your browser settings. Note that
        some parts of the site may not function correctly if cookies are
        disabled.
      </p>

      <h2 className={styles.subtitle}>3. More Information</h2>
      <p className={styles.text}>
        For more details about our use of cookies, please contact us via our
        contact page.
      </p>
    </div>
  );
};

export default CookiePolicyPage;
