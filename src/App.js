import React from "react";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Index from "./Pages/Fashion1";
import Index2 from "./Pages/Fashion2";
import Index3 from "./Pages/Fashion3";
import Index4 from "./Pages/Electronic";
import Index6 from "./Pages/Kids";
import Index5 from "./Pages/Furniture";
import PGLS from "./Pages/PGLS";
import PGRS from "./Pages/PGRS";
import PGNS from "./Pages/PGNS";
import PGFW from "./Pages/PGFW";
import PLLS from "./Pages/PLLS";
import PLRS from "./Pages/PLRS";
import PLNS from "./Pages/PLNS";
import PLFW from "./Pages/PLFW";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/index3" element={<Index3 />} />
        <Route path="/index4" element={<Index4 />} />
        <Route path="/index5" element={<Index5 />} />
        <Route path="/index6" element={<Index6 />} />
        <Route path="/shop-grid-left-sidebar" element={<PGLS />} />
        <Route path="/shop-grid-right-sidebar" element={<PGRS />} />
        <Route path="/shop-grid-no-sidebar" element={<PGNS />} />
        <Route path="/shop-grid-fullwidth" element={<PGFW />} />
        <Route path="/shop-list-left-sidebar" element={<PLLS />} />
        <Route path="/shop-list-right-sidebar" element={<PLRS />} />
        <Route path="/shop-list-no-sidebar" element={<PLNS />} />
        <Route path="/shop-list-fullwidth" element={<PLFW />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
