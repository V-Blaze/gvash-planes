import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1 className="text-3xl text-red-500 font-bold underline">Gvash planes</h1>} />
      </Routes>
    </div>
  );
}

export default App;
