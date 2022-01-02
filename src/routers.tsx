import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main';
import { Redirect } from './pages/Redirect';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routers */}
        <Route path="/" element={<Main />} />
        <Route path="/service-worker.js"/>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}