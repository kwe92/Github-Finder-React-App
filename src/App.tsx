import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Wrapper, {Container} from "./AppStyles";
import { Notfound } from "./components/notfound/Notfound";
import Home  from "./components/home/Home";
import styled from "styled-components";

const App = (props:{}) => 
            <Router>
                  <Navbar/>
                <Wrapper>
                    <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/*" element={<Notfound/>}/>
                    </Routes>
                    </Container>
                    <Footer/>
                </Wrapper>
            </Router>

export default App;