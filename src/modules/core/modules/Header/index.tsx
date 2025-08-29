import LanguageSelector from 'modules/core/components/LanguageSelector';
import HeaderLogo from 'modules/core/components/HeaderLogo';
import styles from './index.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div>
      <HeaderLogo />
      <LanguageSelector />
    </div>
  </header>
);

export default Header;
