import React from 'react';


import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';



const OtherSign = () => {
    return(
        <div className="">
            <Router>
                
               <Routes>
               
               <Route exact path="/home" element={<Homepage />} />
               <Route exact path="/signin" element={<SignIn/>} />
                <Route exact path="/signup" element={<SignUp />}/>
                
                </Routes>


            </Router>
        </div>
    )
}

export default OtherSign;