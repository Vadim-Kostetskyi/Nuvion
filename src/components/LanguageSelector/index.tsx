import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import DropDown from 'modules/core/components/DropDown';
import styles from './index.module.scss';

const langMap: Record<string, string> = {
  nl: 'NL',
  en: 'EN',
  ua: 'UA',
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (lang: string) => {
    const language = lang.toLowerCase();
    i18n.changeLanguage(language);

    const { pathname } = location;
    const segments = pathname.split('/').filter(Boolean);

    if (Object.keys(langMap).includes(segments[0])) {
      segments[0] = language;
    } else {
      segments.unshift(language);
    }

    const newPath =
      language === 'nl'
        ? `/${segments.slice(1).join('/')}`
        : `/${segments.join('/')}`;

    navigate(newPath || '/', { replace: true });
  };

  const firstSegment = location.pathname.split('/').filter(Boolean)[0];
  const currentLang = langMap[firstSegment?.toLowerCase()] || 'NL';

  return (
    <DropDown
      title={currentLang}
      list={Object.values(langMap)}
      onChange={handleChange}
      style={styles.dropDown}
    />
  );
};

export default LanguageSelector;
