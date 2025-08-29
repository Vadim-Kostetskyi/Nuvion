import LanguageSelector from 'modules/core/components/LanguageSelector';
import styles from './index.module.scss';
import Logo from 'assets/svg/Logo';

const Header = () => (
  <header className={styles.header}>
    <Logo />

    <LanguageSelector />
  </header>
);

export default Header;
