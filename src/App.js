import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact"

function App() {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Project />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
