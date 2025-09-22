import LanguageSelector from 'components/LanguageSelector';
import HeaderLogo from 'modules/core/components/HeaderLogo';
import HeaderNav from '../HeaderNav';
import styles from './index.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>
      <HeaderLogo />
      <div>
        <HeaderNav />
        <LanguageSelector />
      </div>
    </div>
  </header>
);

export default Header;
