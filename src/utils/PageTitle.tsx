import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const capitalizeWords = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const PageTitle: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const lang = path.startsWith('/en') ? 'en' : 'nl';
  const cleanPath = path.replace(/^\/(en|nl)/, '') || '/';

  let title = '';

  if (cleanPath.startsWith('/project/')) {
    const projectSlug = cleanPath.replace('/project/', '');
    const projectTitle = capitalizeWords(projectSlug);
    title = `${projectTitle} | Nuvion B.V.`;
  } else {
    const titlesMap: Record<string, Record<string, string>> = {
      '/': { nl: 'Nuvion B.V.', en: 'Nuvion B.V.' },
      '/portfolio': {
        nl: 'Portfolio | Nuvion B.V.',
        en: 'Portfolio | Nuvion B.V.',
      },
      '/about-us': {
        nl: 'Over ons | Nuvion B.V.',
        en: 'About Us | Nuvion B.V.',
      },
    };

    title =
      titlesMap[cleanPath]?.[lang] ||
      (lang === 'en' ? 'Nuvion B.V.' : 'Nuvion B.V.');
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default PageTitle;
