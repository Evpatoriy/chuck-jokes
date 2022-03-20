import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { FavPage } from "./pages/FavPage";
import { StoreContext } from "storeon/react";
import { store } from "./store";
import { HeaderLogo, HeaderWrapper } from "./pages/MainPage/styles";
import LogoNoris from "./Image/chucknorris_logo.png";

function App() {
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
      <HeaderWrapper>
        <a href="https://api.chucknorris.io/">
          <HeaderLogo src={LogoNoris} />
        </a>
      </HeaderWrapper>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/FavJokes" element={<FavPage />}></Route>
        </Routes>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
