import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Wrapper from "./AppStyles";

const App = (props:{}) => {
    return (
            <Router>
                <Wrapper>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<></>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                    <Footer/>
                </Wrapper>
            </Router>
            );
        };

export default App;