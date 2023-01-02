import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = (props:{})=>{
    return(
        <Router>
            {/* TODO: Move to its own AppStyles.tsx */}
        <div style={{height: "100vh", width: "100vw", background: "red", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <Navbar/>
        <Footer/>
        </div>
        </Router>
    );
};

export default App;