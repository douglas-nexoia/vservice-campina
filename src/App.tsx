import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LavaESeca from './pages/LavaESeca';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lava-e-seca" element={<LavaESeca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
