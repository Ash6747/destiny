import React from 'react';
import Logo from '../img/logo.png'
const Navbar = () => {
    return (
        <div className='nav'>
            {/* <div className='webInfo'> */}
                <div className='webIcon'>
                    <img src={Logo} alt='appLogo'/>
                </div>
                <ul>
                    <li>Emotions</li>
                    <li>Manifesto</li>
                    <li>Self-awarness test</li>
                    <li>Work With Us</li>
                </ul>
            {/* </div> */}
            <div className='appLink'>Download app</div>
        </div>
    );
}

export default Navbar;
