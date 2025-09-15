import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './AdminPage/insex';
import ProductPage from './ProductPage';
import 'styles/index.scss';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<AdminPage />} />
    <Route path="/project/:productSlug" element={<ProductPage />} />

    <Route path="/ua" element={<Outlet />}>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<AdminPage />} />
      <Route path="project/:productSlug" element={<ProductPage />} />
    </Route>

    <Route path="/en" element={<Outlet />}>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<AdminPage />} />
      <Route path="project/:productSlug" element={<ProductPage />} />
    </Route>

    {/* 404 → редірект */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
