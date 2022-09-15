import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mostrar from './blogs/Mostrar';
import Crear from './blogs/Crear';
import Editar from './blogs/Editar';

function App() {
  return (
    <div className="container">
      <header></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mostrar />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/editar" element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
