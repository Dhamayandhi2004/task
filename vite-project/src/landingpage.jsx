// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentss/function/navbar";
import Home from "./componentss/function/Home";
import About from "./componentss/function/about";
import Contact from "./componentss/function/contact";
import Gallery from "./componentss/function/gallery";
import UseEffect from "./componentss/function/UseState";
import UseRef from "./componentss/function/UseRef";
import ExamResults from "./componentss/function/UseContext";
import UseMemo from "./componentss/function/UseMemo";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                college="Kongu Engineering"
                clg1="Kongu Arts"
                clg2="Kongu Naturopathy"
              />
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/use-Effect" element={<UseEffect />} />
          <Route path="/use-Ref" element={<UseRef />} />
          <Route path="/use-Context" element={<ExamResults />} />
          <Route path="/use-Memo" element={<UseMemo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
