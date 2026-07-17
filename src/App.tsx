import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LavaESeca from './pages/LavaESeca';
import Links from './pages/Links';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lava-e-seca" element={<LavaESeca />} />
        <Route path="/links" element={<Links />} />
        <Route path="/link" element={<Links />} />
        <Route path="/instagram" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
