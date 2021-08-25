import React, {useRef, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import "./siginpage.css";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./firebase";
import {selectemail,setsignin} from "./features/user/userSlice";
function Siginpage() {
    const [username,setuser]=useState("");
    const [err,seterror]=useState("");
    const history=useHistory();
    const dispatch=useDispatch();
  const useremail=useSelector(selectemail);
//   const u=useSelector(selectu);
  const email=useRef(null);
  const password=useRef(null);
 
    function handlesubmit(e){
        e.preventDefault();
        try{
            auth.signInWithEmailAndPassword(email.current.value,password.current.value).then((result)=>{
                dispatch(setsignin({
                    email:result.user.email
                }));
                setuser(result.user.email);
                history.push("/home");
            }).catch((e)=>{
                console.log(e);
                seterror(e.message);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    console.log(username);
    console.log(useremail);
    // console.log(u);
    return (
        <div className="loginpages">
            <div className="blackpage">
            <div className="lognav">
                <Link to="/home">
            <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt=""></img></Link></div>
            <div className="form">
                <h2>Sign In</h2>
                <form onSubmit={handlesubmit}>    
                    <div className="input"><input type="email" placeholder="Email" ref={email}/></div>
                    <div className="input"><input type="password" placeholder="Password" ref={password}/></div>
                    {err && (<div style={{width:"350px"}}>{err}</div>)}
                    <input type="submit" value="Sign In"></input>
                </form>
                <p>New to Netflix? <Link to="/login"><span>Sign up now</span></Link></p>
            </div>
            </div>
        </div>
    )
}

export default Siginpage;
