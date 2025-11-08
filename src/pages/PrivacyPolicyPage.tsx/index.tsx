import React from 'react';
import styles from './index.module.scss';

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <p className={styles.text}>
        At Nuvion Group, we value your privacy. This Privacy Policy explains how
        we collect, use, and protect your personal information when you visit
        our website.
      </p>

      <h2 className={styles.subtitle}>1. Information We Collect</h2>
      <p className={styles.text}>
        We may collect personal information such as your name, email address,
        and any information you provide when contacting us or filling out forms
        on our site.
      </p>

      <h2 className={styles.subtitle}>2. How We Use Your Information</h2>
      <p className={styles.text}>
        Your information helps us improve our services, respond to inquiries,
        and provide a better user experience. We do not sell your personal data
        to third parties.
      </p>

      <h2 className={styles.subtitle}>3. Cookies</h2>
      <p className={styles.text}>
        Our website uses cookies to enhance your browsing experience. You can
        control cookie settings through your browser.
      </p>

      <h2 className={styles.subtitle}>4. Data Security</h2>
      <p className={styles.text}>
        We implement appropriate measures to protect your personal information
        from unauthorized access or disclosure.
      </p>

      <h2 className={styles.subtitle}>5. Changes to This Policy</h2>
      <p className={styles.text}>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated date.
      </p>

      <p className={styles.text}>
        If you have any questions about our Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
