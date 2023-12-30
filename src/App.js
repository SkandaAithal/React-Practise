import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Routing/Home";
import Products from "./Components/Routing/Products";

import Navbar from "./Components/Routing/Navbar";
import Image1 from "./Components/Routing/Image1";
import Image2 from "./Components/Routing/Image2";
import Image3 from "./Components/Routing/Image3";

import ValidateWhileTyping from "./Components/ValidateWhileTyping";
import ExpenseTracker from "./Components/ExpenseTracker";
import Forms1 from "./Components/Forms1";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          data={[
            { key: "Home", url: "/" },
            { key: "Products", url: "/products" },
            { key: "Form", url: "/form" },
            { key: "Expense", url: "/expense" },
          ]}
        />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="img1" element={<Image1 />} />
            <Route index element={<Image1 />} />
            <Route path="img2" element={<Image2 />} />
            <Route path="img3" element={<Image3 />} />
          </Route>
          <Route path="/img3/" element={<Image3 />} />
          <Route path="/products" element={<Products />} />

          <Route path="/form" element={<ValidateWhileTyping />} />
          <Route path="/expense" element={<ExpenseTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
