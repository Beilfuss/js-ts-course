import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from './routes';

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter é o componente que vai encapsular todas as rotas */}
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
