import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Wrapper, {Container} from "./AppStyles";
import { Notfound } from "./components/notfound/Notfound";
import Home  from "./components/home/Home";
import User from "./components/User/User";

//TODO: Change the isScrolling Variable | implemented differently | displays on user navigation
const App = (props:{}) => 
           {

            const [footer, setFooter] = useState(false);

            return (
                <Router>
                    <Navbar setFooter = {setFooter}/>
                    <Wrapper setFooter = {footer}>
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home setFooter={setFooter}/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/user/:login" element={<User setFooter = {setFooter}/>}/>
                            <Route path="/*" element={<Notfound/>}/>
                        </Routes>
                        </Container>
                        <Footer/>
                    </Wrapper>
                </Router>
            );
        };

export default App;