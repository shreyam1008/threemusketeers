import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Quiz from "./Pages/Quiz";
import PrimaryLayout from "./Layouts/PrimaryLayout";

const App = () => {
  return (
    <div classname="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrimaryLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
