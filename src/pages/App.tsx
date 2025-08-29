import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import 'styles/index.scss';

const App = () => (
  <Routes>
    {/* дефолтна мова (англійська) */}
    <Route path="/" element={<HomePage />} />

    {/* українська */}
    <Route path="/ua/*" element={<HomePage />} />

    {/* шведська */}
    <Route path="/nl/*" element={<HomePage />} />

    {/* 404 → редірект */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
