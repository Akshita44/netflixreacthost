import React, { useRef, useState,useContext } from 'react'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";
import { useParams } from "react-router-dom";
import "./signup.css";
// import {useDispatch} from "react-redux";
// import {selectu,setsignup} from "./features/user/userSlice";
function Signup(props) {
    const history=useHistory();
    const {id}=useParams();
    const ref=useRef();
    // const dispatch=useDispatch();
    const [err,seterror]=useState("");
   
//   console.log(useSelector(selectu));
    function handlesubmit(e){
        e.preventDefault();
        try{
            auth.createUserWithEmailAndPassword(id,ref.current.value).then((r)=>{
                console.log(r);
            history.push("/profile")
            }).catch((e)=>{
                console.log(e);
                seterror(e.message);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <>
        <div style={{backgroundColor:"white"}}>
        <div className="signnav">
                <Link to="/">
            <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt=""></img></Link>
           <Link to="/signin"> <button className="btn">Sign In</button></Link></div>
            <div className="sigincontent">
                <h2>Joining Netflix is easy.</h2>
                <p>Enter your password and you will be watching in no time.</p>
                <p>Email</p>
                <p><b>{id}</b></p>
                <form onSubmit={handlesubmit}>
                <input type="password" placeholder="Enter Your Password" ref={ref} required/>
                {err && (<div>{err}</div>)}
                <button type="submit">Next</button></form>
            </div>
        </div>    
        </>
    )
}

export default Signup;
