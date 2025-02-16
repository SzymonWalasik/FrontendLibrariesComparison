import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import SideMenu from "./components/SideMenu";
import DashboardPage from "./pages/DashboardPage";
import CarouselPage from "./pages/CarouselPage";
import LazyPage from "./pages/LazyPage";
import DelayedFormPage from "./pages/DelayedFormPage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <SideMenu />
        <Layout.Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="/lazy" element={<LazyPage />} />
            <Route path="/delay" element={<DelayedFormPage />} />
          </Routes>
        </Layout.Content>
      </Layout>
    </Router>
  );
};

export default App;