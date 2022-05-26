import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';
import { useEffect } from 'react';
import { getShops } from './actions/shops';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(getShops());
  }, [dispatch])

  return (
    <div className="">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
