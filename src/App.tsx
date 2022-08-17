import React from "react";

import Home from "./Pages/Home";
import Treino from "./Pages/Treino";

import { GlobalStyle } from "./Styles/Global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/treino/:treinoId" element={<Treino />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
