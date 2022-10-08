import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Quiz from "./Pages/Quiz";

const App = () => {
  return (
    <BrowserRouter>
      <div classname="App">
        <Routes>
          <Route element={<Layout />}>
            {" "}
            //Higher Order Component
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
