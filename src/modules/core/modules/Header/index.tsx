import HeaderLogo from 'modules/core/components/HeaderLogo';
import HeaderNav from '../HeaderNav';
import BurgerMenu from 'modules/core/components/BurgerMenu';
import styles from './index.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>
      <HeaderLogo />
      <HeaderNav />
      <BurgerMenu />
    </div>
  </header>
);

export default Header;
