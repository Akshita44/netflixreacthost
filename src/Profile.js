import React from 'react'
import "./profile.css";
import {auth} from "./firebase";
import { useDispatch, useSelector} from "react-redux";
import {setsignout,selectemail} from "./features/user/userSlice";
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";

function Profile() {
    console.log("hellllllllllllllllllllllllooooooooooooo");
    const dispatch= useDispatch();
    const history=useHistory();
    const user=useSelector(selectemail);
    function handlesignout(){
        auth.signOut().then(()=>{
             dispatch(setsignout());
             history.push("./login");
        }).catch((e)=>{
            console.log(e);
        })
    }
    console.log(user);
    return (
        <div style={{backgroundColor:"black",width:"100vw",height:"100vh"}}>
        <div className={`lognavss`}>
            <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="" id="netflixlogos"/>
            <div style={{display:"flex"}}>
            <Link to="/signin"><button className="btn">Sign In</button></Link>
            <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" id="imgs"/></div>
        </div>
        <div className="main1">
            <h2>Edit Profile</h2>
            <div style={{display:"flex"}}>
            <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" id="imgs2"/>
            <div className="sidebox">
                <div className="email">{user}</div>
                <div style={{fontSize:"20px",padding:"5px"}}>Plans(Current Plan:Premium)</div>
                <div className="bigdiv">
                    <p>Renewal date:04/03/2021</p>
                    <div className="subscribe">
                        <div><h4>Netflix Standard</h4><p>1030p</p></div>
                        <button>Subscribe</button>
                    </div>
                    <div className="subscribe">
                    <div><h4>Netflix Basic</h4><p>480p</p></div>
                    <button>Subscribe</button>
                    </div>
                    <div className="subscribe">
                    <div><h4>Netflix Premium</h4><p>4X+HDB</p></div>
                    <button>Subscribe</button>
                    </div>
                </div>
                <button className="Signout" onClick={handlesignout}>Sign out</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Profile
