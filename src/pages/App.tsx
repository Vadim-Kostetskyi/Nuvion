import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import 'styles/index.scss'

const App = () => (
  <>
    {/* <ScrollToTop /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <ProductFormPage />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  </>
);

export default App
