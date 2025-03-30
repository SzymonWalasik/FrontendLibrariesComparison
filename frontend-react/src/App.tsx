import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import SideMenu from "./components/SideMenu";
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CarouselPage = lazy(() => import("./pages/CarouselPage"));
const LazyPage = lazy(() => import("./pages/LazyPage"));
const DelayedFormPage = lazy(() => import("./pages/DelayedFormPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <SideMenu />
        <Layout.Content style={{ padding: "20px" }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/carousel" element={<CarouselPage />} />
              <Route path="/lazy" element={<LazyPage />} />
              <Route path="/delay" element={<DelayedFormPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </Suspense>
        </Layout.Content>
      </Layout>
    </Router>
  );
};

export default App;