import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./row.css";
function Row({title,fetchurl}){
    const [rdata,setdata]=useState([]);
    useEffect(()=>{
        const rowdata=async()=>{
            const {data}=await axios.get(fetchurl);
            setdata(data.results);
        }
        rowdata();
    },[])
    console.log(rdata);
    return (
        <div className="rowdiv">
            <h2 id={title}>{title}</h2>
            <div className="inrowdiv">
            {rdata.map((element)=>(
                <div className="movie" key={element.id} style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${element?.poster_path || element?.backdrop_path}")`}}>
                </div>
            ))}
            </div>   
        </div>
    )
}
export default Row;