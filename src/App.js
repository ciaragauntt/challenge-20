import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact"

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
