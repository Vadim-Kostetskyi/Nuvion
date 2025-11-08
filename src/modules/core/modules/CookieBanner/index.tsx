import { useState, useEffect } from 'react';
import styles from './index.module.scss';

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(
    () => localStorage.getItem('cookieAccepted') === 'true'
  );
  const [declined, setDeclined] = useState(
    () => localStorage.getItem('cookieDeclined') === 'true'
  );

  useEffect(() => {
    if (accepted) localStorage.setItem('cookieAccepted', 'true');
    if (declined) localStorage.setItem('cookieDeclined', 'true');
  }, [accepted, declined]);

  if (accepted || declined) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.card}>
        <p className={styles.text}>
          We use cookies to enhance your browsing experience.{' '}
          <a href="/cookie-policy" className={styles.link}>
            Learn more
          </a>
        </p>
        <div className={styles.buttons}>
          <button onClick={() => setAccepted(true)} className={styles.accept}>
            Accept
          </button>
          <button onClick={() => setDeclined(true)} className={styles.decline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
