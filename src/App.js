import React from "react";
import {
  Footer,
  Features,
  Header,
  DetailsPage,
  NotFoundPage,
} from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contributors from "./containers/contributors/Contributors";
import NavigationBar from "./components/navbar/navbar";
import AboutMe from "./containers/aboutMe/AboutMe";

const App = () => (
  // page routing
  <>
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <div className="gradient__bg">
                <NavigationBar />
                <Header />
              </div>
              <Features />
              <Footer />
            </div>
          }
        />
        {/* details page route */}
        <Route path="/details/:Id" element={<DetailsPage />} />
        {/* About  page route */}
        <Route exact path="/about" element={<AboutMe />} />
        {/* volunteers page route */}
        <Route path="/volunteers" element={<Contributors />} />
        {/* 404 page route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
