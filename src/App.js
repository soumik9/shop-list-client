import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AddShop from './pages/AddShop/AddShop';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';
import EditShop from './pages/EditShop/EditShop';

function App() {

  return (
    <div className="">

      <Header />
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-shop" element={<AddShop />} />
        <Route path="/edit-shop/:shopId" element={<EditShop />} />
      </Routes>

    </div>
  );
}

export default App;
