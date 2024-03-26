import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";

export const Router: React.FC = () => {
  const URL = process.env.PUBLIC_URL;
  return (
    <BrowserRouter>
      <Routes /*location={location} key={location.pathname}*/>
        <Route path={URL} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
