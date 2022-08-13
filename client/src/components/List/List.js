import React from "react";
import "./style.css";
import FormDialog from "../dialog/dialog";

export default function List(props){
    const [open, setOpen] = React.useState(false);

    const handleClickList = () => {
      setOpen(true)
    }

    return(
        <>
          <FormDialog 
            open={open} 
            setOpen={setOpen}
            name={props.name}
            age={props.age}
            breed={props.breed}
            listList={props.listList}
            setListList={props.setListList}
            id={props.id}
            />
        <div className="card-container" onClick={() => handleClickList()}>
            <div className="card-container">
            <p className="card-title">{props.name}</p>
            <p className="card-id">{props.id}</p>
            <p className="card-breed">{props.breed}</p>
            <p className="card-age">{props.age}</p>
            </div>
        </div>
      </>
    )
}