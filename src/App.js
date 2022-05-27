import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddShop from './pages/AddShop/AddShop';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';

function App() {

  return (
    <div className="">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-shop" element={<AddShop />} />
      </Routes>

    </div>
  );
}

export default App;
