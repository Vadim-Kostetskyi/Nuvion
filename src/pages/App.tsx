import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './AdminPage/insex';
import ProductPage from './ProductPage';
import LoginPage from './LoginPage';
import PrivateRoute from 'storeRedux/PrivateRoute';
import FakeHomePage from './HomePage/fake';
import PortfolioPage from './PortfolioPage';
import AboutUsPage from './AboutUsPage';
import 'styles/index.scss';

const path = import.meta.env.VITE_ROUTE_PATH;

const App = () => (
  <Routes>
    <Route path="/" element={<FakeHomePage />} />

    <Route path={`/${path}`} element={<HomePage />} />
    <Route path="/project/:productSlug" element={<ProductPage />} />
    <Route path={`/${path}/login`} element={<LoginPage />} />
    <Route path={`/${path}/portfolio`} element={<PortfolioPage />} />
    <Route path={`/${path}/about-us`} element={<AboutUsPage />} />

    {/* <Route path={`/ua/${path}`} element={<Outlet />}>
      <Route index element={<HomePage />} />
      <Route path="project/:productSlug" element={<ProductPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path={'about-us'} element={<AboutUs />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />
    </Route> */}

    <Route path={`/en/${path}`} element={<Outlet />}>
      <Route index element={<HomePage />} />
      <Route path="project/:productSlug" element={<ProductPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
      <Route path={'about-us'} element={<AboutUsPage />} />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />
    </Route>

    <Route
      path={`/${path}/dashboard`}
      element={
        <PrivateRoute>
          <AdminPage />
        </PrivateRoute>
      }
    />

    {/* 404 → редірект */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
