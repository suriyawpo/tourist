import React from "react";
import Home from "./pages/Home";
import Design from "./pages/Design";
import About from "./pages/About";
import Discover from "./pages/Dicover.jsx";
import A from "./pages/A";
import Footer from "./pages/Footer";
import Destination from "./pages/Destination";

const App = () => {
    return (
        <div className="bg-stone-100 ">
            <Home />
            <Design />
            <About />
            <Destination />
            <A />
            <Discover />
            <Footer />
        </div>
    );
};

export default App;
