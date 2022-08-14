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
        <div className="list-container" onClick={() => handleClickList()}>
            <p className="list-title">{props.name}</p>
            <p className="list-id">{props.id}</p>
            <p className="list-breed">{props.breed}</p>
            <p className="list-age">{props.age}</p>
        </div>
      </>
    )
}