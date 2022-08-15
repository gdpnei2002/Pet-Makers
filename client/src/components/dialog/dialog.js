import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    age: props.age,
    breed: props.breed,
    client: props.client,
    animal: props.animal,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPet = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      age: editValues.age,
      breed: editValues.breed,
      client: editValues.client,
      animal: editValues.animal,
    }).then(() => {
      props.setListList(
        props.listList.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
                age: editValues.age,
                breed: editValues.breed,
                client: editValues.client,
                animal: editValues.animal,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeletePet = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListList(
        props.listCard.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
                disabled
                margin="dense"
                id="id"
                label="id"
                defaultValue={props.id}
                type="text"
                fullWidth/>
          <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nome do pet"
                defaultValue={props.name}
                type="text"
                onChange={handleChangeValues}
                fullWidth/>
          <TextField
                autoFocus
                margin="dense"
                id="age"
                label="Idade"
                defaultValue={props.age}
                type="number"
                onChange={handleChangeValues}
                fullWidth/>
          <TextField
                autoFocus
                margin="dense"
                id="breed"
                label="Raça"
                defaultValue={props.breed}
                type="text"
                onChange={handleChangeValues}
                fullWidth/>
          <TextField
                autoFocus
                margin="dense"
                id="client"
                label="Nome do cliente"
                defaultValue={props.client}
                type="text"
                onChange={handleChangeValues}
                fullWidth/>
          <TextField
                autoFocus
                margin="dense"
                id="animal"
                label="Animal"
                defaultValue={props.animal}
                type="text"
                onChange={handleChangeValues}
                fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeletePet()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditPet()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}