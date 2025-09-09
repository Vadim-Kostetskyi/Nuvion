import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ProductForm from './ProductFormPage';
import 'styles/index.scss';
import ProjectTable from './ProductTable';

const App = () => (
  <Routes>
    {/* дефолтна мова (англійська) */}
    <Route path="/" element={<HomePage />} />

    {/* українська */}
    <Route path="/ua/*" element={<HomePage />} />

    {/* шведська */}
    <Route path="/en/*" element={<HomePage />} />

    <Route path="/dashboard" element={<ProjectTable />} />

    {/* 404 → редірект */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
