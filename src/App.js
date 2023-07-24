import styles from './App.module.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Home from "./Pages/Home/Home";
import SearchPage from "./Pages/SearchPage/SearchPage";
import GuitarAcoustics from "./Pages/GuitarsAcoustics/GuitarsAcoustics";
import GuitarEletrics from "./Pages/GuitarsEletrics/GuitarsEletrics";
import MyShopping from "./Pages/MyShopping/MyShopping";
import GuitarPage from "./Pages/GuitarPage/GuitarPage";
import OurStores from "./Pages/ourStores/ourStores";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className={styles.search}>
          <Search />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:nameguitar" element={<GuitarPage />} />
          <Route path="/acoustics" element={<GuitarAcoustics />} />
          <Route path="/eletrics" element={<GuitarEletrics />} />
          <Route path="/my-shopping" element={<MyShopping />} />
          <Route path="/ourStores" element={<OurStores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// cor principal #00C2DB