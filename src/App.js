import { React, useState } from "react";
import { Brand, Cta, Testbed } from "./components";
import Cookies from "js-cookie";
import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import ResponsiveAppBar from "./components/navbar/Navbar2";

const App = () => {
  const [count, setCount] = useState(0);
  const [cCount, setCCount] = useState(Cookies.get("clickCount"));

  const handleCountChange = (cnt) => {
    setCount(cnt);
    Cookies.set("clickCount", count);
    setCCount(count + 1);
  };
  return (
    <div className='App'>
      <div className='gradient__bg'>
        {/* <Navbar /> */}
        <ResponsiveAppBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Testbed count={count} onCountChange={handleCountChange} />
      {cCount}
      <Footer />
    </div>
  );
};

export default App;
