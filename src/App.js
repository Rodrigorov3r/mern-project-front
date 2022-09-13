import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mostrar from './blogs/Mostrar';

function App() {
  return (
    <div className="App">
      <header></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mostrar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
