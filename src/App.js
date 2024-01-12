import React from "react";

// Pages
import HomePage from "./Pages/HomePage.js";
import ContactPage from "./Pages/ContactPage.js";
import AboutUsPage from "./Pages/AboutUsPage.js";
import LoginPage from "./Pages/LoginPage.js";
import SignUpPage from "./Pages/SignUpPage.js";

// Routing Modules
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./Pages/Root.js";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./darkMode.js";
import CartPage from "./Pages/CartPage.js";
import ProDetails from "./Pages/ProDetails.js";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Root />} exact>
                <Route index element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/cart/:id" element={<CartPage />} />
                <Route path="/view_details/:id" element={<ProDetails />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
