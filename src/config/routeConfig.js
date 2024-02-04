import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
//screens
import HomeScreen from "../pages/Home";
import AboutScreen from "../pages/About";
import ServiceScreen from "../pages/Service";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="service" element={<ServiceScreen />} />
          {/* If you have other nested routes, they should be defined here */}
        </Route>
        {/* This catch-all route is placed outside of the nested routes to ensure it catches all unmatched paths */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
