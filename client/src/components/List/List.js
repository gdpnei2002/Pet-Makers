import React from "react";
import "./style.css";

export default function List(props){
    return(
        <>
        <div className="card-container">
          <p className="card-title">{props.name}</p>
          <p className="card-id">{props.id}</p>
          <p className="card-breed">{props.breed}</p>
          <p className="card-age">{props.age}</p>
        </div>
      </>
    )
}