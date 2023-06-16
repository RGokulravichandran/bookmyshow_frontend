import React from "react";
import "./App.css";
import "./components/home/styles.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Header from "./components/home";
import AboutMoviePage from "./Pages/AboutMovie/AboutMoviePage";
import BuyTicketsPage from "./Pages/BuyTickets/BuyTicketsPage";
import ShowtimesComponent from "./Test";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location/movies/:name/:id" element={<AboutMoviePage />} />
        <Route
          path="/buytickets/:name/location/:id"
          element={<BuyTicketsPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <ShowtimesComponent /> */}
    </div>
  );
}

export default App;
