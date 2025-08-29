import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import DropDown from '../DropDown';
import styles from './index.module.scss';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (lang: string) => {
    const language = lang.toLocaleLowerCase();
    i18n.changeLanguage(language);

    if (language === 'en') {
      navigate('/', { replace: true });
    } else {
      navigate(`/${language}`, { replace: true });
    }
  };

  const currentLang = location.pathname.startsWith('/ua')
    ? 'ua'
    : location.pathname.startsWith('/nl')
    ? 'nl'
    : 'en';

  return (
    <DropDown
      title={currentLang}
      list={['EN', 'UA', 'NL']}
      onChange={handleChange}
      style={styles.dropDown}
    />
  );
};

export default LanguageSelector;
