import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const capitalizeWords = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const PageTitle: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace(/^\/(en|nl)/, '') || '/';

  let title = '';

  if (path.startsWith('/project/')) {
    const projectSlug = path.replace('/project/', '');
    const projectTitle = capitalizeWords(projectSlug);
    title = `${projectTitle} | Nuvion B.V.`;
  } else {
    const titlesMap: Record<string, string> = {
      '/': 'Nuvion B.V.',
      '/portfolio': 'Portfolio | Nuvion B.V.',
      '/about-us': 'Over ons | Nuvion B.V.',
    };
    title = titlesMap[path] || 'Nuvion B.V.';
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default PageTitle;
