import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

const LangLink: FC<PropsWithChildren<LinkProps>> = ({
  to,
  children,
  ...props
}) => {
  const location = useLocation();
  const langPrefix = location.pathname.startsWith('/en') ? '/en' : '';

  let path: string | LinkProps['to'];

  if (to === '/') {
    path = langPrefix || '/';
  } else if (typeof to === 'string') {
    path = `${langPrefix}${to}`.replace(/\/+$/, '').replace('//', '/');
  } else {
    path = to;
  }

  return (
    <Link rel="canonical" to={path} {...props}>
      {children}
    </Link>
  );
};

export default LangLink;
