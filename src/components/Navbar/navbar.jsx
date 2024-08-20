import React from "react";
import "./navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/menu.png";
import profile_icon from "../../assets/jack.png";




function Navbar(){
    return(
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="" />
                <img src={logo} alt="" />
                <input type="text" name="" id="" />
                <img src={search_icon} alt="" />
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} alt="" />

            </div>

        </nav>
    )
}

export default Navbar;