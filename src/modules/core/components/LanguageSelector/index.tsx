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

    if (language === 'nl') {
      navigate('/', { replace: true });
    } else {
      navigate(`/${language}`, { replace: true });
    }
  };

  const currentLang = location.pathname.startsWith('/en')
    ? 'EN'
    : location.pathname.startsWith('/ua')
    ? 'UA'
    : 'NL';

  return (
    <DropDown
      title={currentLang}
      list={['NL', 'EN', 'UA']}
      onChange={handleChange}
      style={styles.dropDown}
    />
  );
};

export default LanguageSelector;
