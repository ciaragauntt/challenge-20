import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Footer />
        </div>
    );
}

export default App;
