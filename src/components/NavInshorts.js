import React from 'react';
import './NavInshorts.css';
// import HamburgerDrawer from "./HamburgerDrawer";


const NavInshorts = (setCategory) => {
    return(
        <div className='nav'>
            <div className='icon'>
            {/* HamburgerDrawer */}
                {/* <HamburgerDrawer
                    setCategory={setCategory}
                /> */}
            </div>
            <img 
            style={{cursor: "pointer"}}
            height="80%"
            alt="logo"
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"/>

        </div>
    )
}

export default NavInshorts;