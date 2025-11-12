import { useEffect } from 'react';

const setDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title || 'Nuvion';
  }, [title]);
};

export default setDocumentTitle;
