import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";


function ncard(val){
  return(
   <Card
     imgsrc={val.imgscr}
     title={val.title}
     sname={val.sname}
     link={val.links}
/>

  );
  }

  ReactDOM.render(
    <>
    
    <h2 className="heading">NETFLIX</h2>
    <h1 className="heading_style">TOP 5 NETFLIX MOVIES</h1>,
    
    {Sdata.map(ncard)}
    <footer  className="footer">Copyright-Mohshin</footer>
   </>,
   document.getElementById("root")
  );












