import React, { useEffect, useState } from 'react';
import "./homenav.css";
import {Link} from "react-router-dom";
function Homenav() {
    const [blackshow,setshow]=useState(false);
    const scrolls=()=>{
        if(window.scrollY > 100)
        {
            setshow(true);
        }
        else{
            setshow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrolls)
    },[])
   
    return (
        <>
        <div className={`lognavs ${blackshow && "lognav-black"}`}>

            <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="" id="netflixlogo"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#Trending">Trending</a></li>
                <li><a href="#Action Movies">Movies</a></li>
                <li><a href="#Top Rated">Top Rated</a></li>
            </ul>
           <Link to="/profile" className="link"><img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" id="img"/></Link>
        </div></>
    )
}

export default Homenav;
