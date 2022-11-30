import React from 'react';
import Navb from './Navb';
import { Link } from 'react-router-dom';

const NavSign = () => {
  return (
    <div>
        


            <button  className="border-none bg-transparent text-black mr-4"  ><Link to="/SignIn">Sign In</Link></button>
                <button className="px-8 py-3"><Link to="/SignUp">Sign Up</Link></button>
    </div>
  )
}

export default NavSign