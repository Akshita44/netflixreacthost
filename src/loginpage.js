import React,{useState,useEffect} from 'react'
import "./login.css";
import {Link, useHistory} from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./firebase";
import {selectemail,setsignin} from "./features/user/userSlice";
function Loginpage() {
    const [state,setstate]=useState("");
    const history=useHistory();
    const dispatch=useDispatch();
  const useremail=useSelector(selectemail);
    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            // console.log(u);
            if(user)
            {
                // console.log("hello2");
                dispatch(setsignin({
                    email:user.email
                }));
                history.push("/home");
            }
        })
    },[useremail])
    function handlesubmit(e){
        e.preventDefault();
    }
    return (
        <>
        <div className="loginpage">
            <div className="blackpage">
            <div className="lognav">
                <Link to="/">
            <img src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt=""></img></Link>
           <Link to="/signin"> <button className="btn">Sign In</button></Link></div>
            <div className="logincontent">
                <h1>Unlimited movies, TV </h1>
                <h1>shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                <form onSubmit={handlesubmit}>
                <input type="email" placeholder="Email address" onChange={(e)=>{setstate(e.target.value)}} required/>
                {state?(<Link to={`/signup/${state}`} style={{textDecoration:"none"}}>
                   <button type="submit">Get Started<ChevronRightIcon fontSize="large" style={{color:"white"}}/>
               </button>
               </Link>):(<button type="submit">Get Started<ChevronRightIcon fontSize="large" style={{color:"white"}}/>
               </button>)}
               </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Loginpage;
