import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ShowtimesPage, LoginPage } from "./pages";
import Layout from "./layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/showtimes"
            element={
              <Layout>
                <ShowtimesPage />
              </Layout>
            }
          />
          <Route
            path="/food&drink"
            element={
              <Layout>
                <ShowtimesPage />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
