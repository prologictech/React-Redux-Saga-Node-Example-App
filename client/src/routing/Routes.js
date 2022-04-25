import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from "../components/layout";

import Home from "../containers/Home";
import NotFound from "../containers/NotFound";

const Routing = () => {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Routing;
