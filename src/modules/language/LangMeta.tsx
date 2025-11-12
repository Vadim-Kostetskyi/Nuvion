import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LangMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    html.className = '';

    html.lang = location.pathname.startsWith('/en') ? 'en' : 'nl';

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    const cleanPath = location.pathname.replace(/^\/(en|nl)/, '');

    const links = [
      { hreflang: 'nl', href: `https://nuviongroup.nl/nl${cleanPath}` },
      { hreflang: 'en', href: `https://nuviongroup.nl/en${cleanPath}` },
      // { hreflang: 'x-default', href: `https://nuviongroup.nl${cleanPath}` },
    ];

    links.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });
  }, [location.pathname]);

  return null;
};

export default LangMeta;
