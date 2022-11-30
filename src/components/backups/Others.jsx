import React from 'react';


import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

import Support from '../Support';
import About from '../About';
import Pricing from '../Pricing';
import All from '../All';
import Homepage from '../Pages/Homepage';

import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import Navbar from './Navbar';


const Other = () => {
    return(
        <div className="">
            <Router>
             
               <Routes>
               <Route exact path="/" element={<Homepage/>} />
               <Route exact path="/signin" element={<SignIn/>} />
                <Route exact path="/all" element={<All />}/>
               <Route exact path="/pricing" element={<Pricing/>} />
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/support" element={<Support />}/>
                <Route exact path="/signin" element={<SignIn/>} />
                <Route exact path="/signup" element={<SignUp />}/>
                
                </Routes>



            </Router>
        </div>
    )
}

export default Other;