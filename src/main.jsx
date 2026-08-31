/**
 * External dependencies
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom";

/**
 * Internal dependencies
 */
import Home from "./App/Screens/App";
import Resume from "./App/Screens/Resume";
import theme from "./theme";
import "./App/Components/animations/gsapSetup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>
);
