import React, { useEffect, useRef, useState } from 'react'
import axios from "./axios";
import "./banner.css";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import requests from "./requests";
function Banner() {
    const [data,setdata]=useState("");
    const des=useRef(null);
    const ref=useRef(null);
    useEffect(()=>{
        const apidata =async()=>{
            const {data} = await axios.get(requests.fetchNetflixOriginals);
             setdata(data.results[Math.floor(Math.random()*data.results.length-1)]);  
        }
        apidata();
    },[])

    useEffect(()=>{
        if(data.overview){
        var interval=setTimeout(()=>{
            des.current.style.display="none";
            ref.current.style.fontSize="55px";
            ref.current.style.marginTop="20px";
            ref.current.style.transition="all 2s ease"
         },5000)}
         return ()=>{clearInterval(interval)}
    },[data])
    
    function description(x=""){
        if(x.length > 150)
        {
            return `${x.slice(0,150)}...`;
        }
        else {
            return x;
        }
    }
    return (
        <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${data?.backdrop_path}')`
        ,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
            <div className="bannercontent">
            <h1 ref={ref}>{data?.name || data?.original_name}</h1>
            <h4 ref={des}>{description(data?.overview)}</h4>
            <div className="bannerbuttons">
                <button className="play"><PlayArrowIcon  style={{marginRight:"5px"}} fontSize="small"></PlayArrowIcon>Play</button>
                <button className="info"><InfoOutlinedIcon style={{color:"white",marginRight:"5px"}} fontSize="small"></InfoOutlinedIcon>More Info</button>
            </div>
            </div>         
        </div>
    )
}

export default Banner;
