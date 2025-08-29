import Logo from 'assets/svg/Logo';
import { brand } from 'utils/constants';
import styles from './index.module.scss';

const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo />
      <p>{brand}</p>
    </div>
  );
};

export default HeaderLogo;
