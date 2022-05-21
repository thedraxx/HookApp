import React from "react";
import { AboutScreen } from "./AboutScreen";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { Error } from "./Error";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
