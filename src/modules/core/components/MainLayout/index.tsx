import { FC, ReactNode } from "react";
// import MenuBar from "../MenuBar";
import styles from "./index.module.scss";
import Header from "modules/core/modules/Header";
import Footer from "modules/core/modules/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    {/* <MenuBar /> */}
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
