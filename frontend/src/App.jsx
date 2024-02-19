import React from "react";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Discover from "./pages/Dicover.jsx";
import A from "./pages/A";
import Footer from "./pages/Footer";
import Destination from "./pages/Destination";

const App = () => {
    return (
        <div className="bg-stone-200">
            <Home />
<About/>
            <Destination />
            <A />
            <Discover />
            <Footer />
        </div>
    );
};

export default App;
