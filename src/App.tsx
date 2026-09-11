import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LavaESeca from './pages/LavaESeca';
import LavaLoucas from './pages/LavaLoucas';
import CoifasComerciais from './pages/CoifasComerciais';
import Links from './pages/Links';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lava-e-seca" element={<LavaESeca />} />
        <Route path="/lava-loucas" element={<LavaLoucas />} />
        <Route path="/lava-louca" element={<LavaLoucas />} />
        <Route path="/coifas-comerciais" element={<CoifasComerciais />} />
        <Route path="/coifa-comercial" element={<CoifasComerciais />} />
        <Route path="/coifas-industriais" element={<CoifasComerciais />} />
        <Route path="/coifa-industrial" element={<CoifasComerciais />} />
        <Route path="/comercial" element={<CoifasComerciais />} />
        {/* Micro-ondas integrado na página principal */}
        <Route path="/microondas" element={<Index />} />
        <Route path="/micro-ondas" element={<Index />} />
        <Route path="/forno-eletrico" element={<Index />} />
        <Route path="/fornos-e-microondas" element={<Index />} />
        <Route path="/links" element={<Links />} />
        <Route path="/link" element={<Links />} />
        <Route path="/instagram" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
