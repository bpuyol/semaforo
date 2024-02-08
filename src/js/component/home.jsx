import React from "react";
import { useState } from "react";

//create your first component

export function TrafficLight() {
const [Color, setColor] = useState("red");


    /*
        let Color = "red";
        let Color = "yelow";
        let Color = "green";
     */
    
        return (
           
           <div className="traffic-light">
                <div onClick={() => setColor("red")} className={"light red" + (Color === "red" ? " shine " : "") }></div>
                <div onClick={() => setColor("yellow")} className={"light yellow" + (Color === "yellow" ? " shine " : "") }></div>
                <div onClick={() => setColor("green")} className={"light green" + (Color === "green" ? " shine " : "") }></div>
            </div>

        
        )
  
}
console.log("prueba")

export default TrafficLight;