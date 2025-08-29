import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import DropDown from '../DropDown';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);

    if (lang === 'en') {
      navigate('/', { replace: true });
    } else {
      navigate(`/${lang}`, { replace: true });
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
      list={['en', 'ua', 'nl']}
      onChange={handleChange}
    />
  );
};

export default LanguageSelector;
