import { FC, ReactNode } from 'react';
import Header from 'modules/core/modules/Header';
import Footer from 'modules/core/modules/Footer';
import styles from './index.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
