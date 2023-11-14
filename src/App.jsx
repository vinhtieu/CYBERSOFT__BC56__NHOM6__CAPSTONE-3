import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ShowtimesPage, LoginPage, Promotion } from "./pages";
import Layout from "./layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />

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
            path="/promotion"
            element={
              <Layout>
                <Promotion />
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
