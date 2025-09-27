import logo from 'assets/logo.jpg';
import { brand } from 'utils/constants';
import styles from './index.module.scss';

const HeaderLogo = () => (
  <div className={styles.logo}>
    <img src={logo} alt="" />
    <p>{brand}</p>
  </div>
);

export default HeaderLogo;
