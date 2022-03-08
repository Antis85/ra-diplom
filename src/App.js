import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Catalog from './components/pages/Catalog/Catalog';
import Main from './components/pages/Main/Main';
import Page404 from './components/pages/404/Page404';
import About from './components/pages/About/About';
import Contacts from './components/pages/Contacts/Contacts';

export default function App() {
  return (
    <Router>
      {/* <div className="page"> */}
      <Routes>
        {/* <Route path="/catalog/:id" element={<Product />} /> */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}
