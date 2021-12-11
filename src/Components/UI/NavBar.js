import {useState, useEffect} from "react";
import "./NavBar.css"

function NavBar(){
    const [show, handleShow] = useState(false);

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(()=> {
        window.addEventListener("scroll", transitionNavBar);
        return()=> window.removeEventListener("scroll", transitionNavBar);
    },[])


    return(
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Logo"/>
                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar"/>
            </div>
        </div>
    )
}

export default NavBar;