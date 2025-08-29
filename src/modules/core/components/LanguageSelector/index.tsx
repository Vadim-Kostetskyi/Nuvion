import DropDown from '../DropDown';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);

    // додаємо мову у шлях
    const currentPath = window.location.pathname.split('/');
    currentPath[1] = lang; // замінюємо другу частину шляху
    window.location.pathname = currentPath.join('/');
  };

  return (
    <DropDown
      title={i18n.language}
      list={['en', 'ua']}
      onChange={handleChange}
    />
  );
};

export default LanguageSelector;
