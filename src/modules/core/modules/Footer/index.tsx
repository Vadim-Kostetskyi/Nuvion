import Copyright from '../Copyright';
import FooterInfo from '../FooterInfo';
import styles from './index.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <FooterInfo />
    <Copyright />
  </footer>
);

export default Footer;
