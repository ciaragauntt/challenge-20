import React, {useState} from 'react';
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";

function Header() {
    const [thisPage, pageChanging] = useState("About");

    const renderApp = () => {
        switch(thisPage) {
            case "About":
                return <About />;
            case "Projects":
                return <Projects />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    };
    return (
        <header>
            <div className="header">
                <h1>Ciara Gauntt</h1>
                <Navigation
                    thisPage = {thisPage}
                    pageChanging = {pageChanging}
                    />
            </div>
            <main>
                <div>{renderApp(thisPage)}</div>
            </main>
        </header>
    
    );
}

export default Header;
