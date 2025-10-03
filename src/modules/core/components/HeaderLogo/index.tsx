import { useLocation } from 'react-router-dom';
import logo from 'assets/logo.jpg';
import { brand } from 'utils/constants';
import LangLink from 'utils/LangLink';
import styles from './index.module.scss';

const HeaderLogo = () => {
  const location = useLocation();

  const ishome = location.pathname === '/' || location.pathname === '/en';

  console.log(ishome);
  console.log(location.pathname === '/' || '/en');

  return (
    <>
      {ishome ? (
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <p>{brand}</p>
        </div>
      ) : (
        <LangLink to={'/'} className={styles.logo}>
          <img src={logo} alt="" />
          <p>{brand}</p>
        </LangLink>
      )}
    </>
  );
};

export default HeaderLogo;
