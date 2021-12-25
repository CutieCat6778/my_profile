import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Bio } from './pages/Bio';
import { Main } from './pages/Main';
import { Projects } from './pages/Projects';

export function AppRouter () {
  return (
    <BrowserRouter>
      <Routes>
        {/* Other routers */}
        <Route path="/" element={<Main/>} />
        <Route path="/profile" element={<Bio/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}