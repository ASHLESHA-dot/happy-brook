import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const setProgresss = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      {" "}
      <BrowserRouter>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgresss={setProgresss}
                key="gen"
                category={"general"}
              />
            }
          />{" "}
          <Route
            path="/business"
            element={
              <News
                setProgresss={setProgresss}
                key="bus"
                category={"business"}
              />
            }
          />{" "}
          <Route
            path="/sports"
            element={
              <News setProgresss={setProgresss} key="spt" category={"sports"} />
            }
          />{" "}
          <Route
            path="/technology"
            element={
              <News
                setProgresss={setProgresss}
                key="tech"
                category={"technology"}
              />
            }
          />{" "}
          <Route
            path="/entertainment"
            element={
              <News
                setProgresss={setProgresss}
                key="ent"
                category={"entertainment"}
              />
            }
          />{" "}
          <Route
            path="/sc"
            element={
              <News
                setProgresss={setProgresss}
                key="sci"
                category={"science"}
              />
            }
          />{" "}
          {/* When URL is '/', show Home */}
          {/* <Route path="/about" element={<About />} />{" "} */}
          {/* When URL is '/about', show About */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
