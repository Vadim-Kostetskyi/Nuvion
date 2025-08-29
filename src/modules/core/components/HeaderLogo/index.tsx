import logo from 'assets/logo.jpg';
import { brand } from 'utils/constants';
import styles from './index.module.scss';

const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      {/* <Logo /> */}
      <img src={logo} alt="" />
      <p>{brand}</p>
    </div>
  );
};

export default HeaderLogo;
