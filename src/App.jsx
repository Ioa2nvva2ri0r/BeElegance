import React, { useEffect, useState } from 'react';
// Router
import { Route, Routes, useLocation } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// Auxiliary Functions
import searchParam from './auxiliary-functions/searchParam';
import { clothesDataAPI } from './redux/slices/getDataClothesSlice';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Page from './components/Page';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  // Router
  const search = useLocation().search;
  const path = searchParam(search, 'section', '');
  // Redux
  const dispatch = useDispatch();
  // React State
  const [toggleModal, setToggleModal] = useState(false);
  // React Effect
  useEffect(() => {
    path !== 'product'
      ? dispatch(clothesDataAPI())
      : dispatch(clothesDataAPI(searchParam(search, 'id', '')));
  }, [path]);

  return (
    <>
      <div className="container">
        <Header funOpenModal={setToggleModal} />
        <Routes>
          <Route
            path="/"
            element={
              <main>{path === '' ? <Home /> : <Page path={path} />}</main>
            }
          />
        </Routes>
      </div>
      <Footer />
      {toggleModal && <Modal funCloseModal={setToggleModal} />}
    </>
  );
}

export default App;
