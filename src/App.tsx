import React, { useState } from "react";
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

            // const [deviceWidth, setDeviceWidth] = useState([]);
            const [footer, setFooter] = useState(false);
            // const listener = window.addEventListener;

            // const handleDeviceOrientation = () => {
            //     const ori = window.screen.orientation.type;
            //     const screenHeight = window.screen.height;

            //     console.log("VIEWPORT orientation: ", ori, screenHeight);
            // };

            window.addEventListener('deviceorientation', (event) => {
                console.log("EVENT: ",event);
                const ori = window.screen.orientation.type;
                const screenHeight = window.screen.height;

                console.log("VIEWPORT orientation: ", ori, screenHeight);
            });
            
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