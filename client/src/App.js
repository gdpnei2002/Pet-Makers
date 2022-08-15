import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import List from './components/List/List';

function App() {
  const [values, setValues] = useState();
  const [listPets, setListPets] = useState();

  const handleChangeValues = (value) =>{
    setValues((prevValue)=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () =>{
    Axios.post("http://localhost:3001/register", {
    name: values.name,
    age: values.age,
    breed: values.breed,
    client: values.client,
    animal: values.animal,
  }).then((response) => {
    console.log(response);
  })
  }

  useEffect(() =>{
    Axios.get("http://localhost:3001/getList").then((response) =>{
      setListPets(response.data);
    })
  },[])

  return (
    <div className="app-container">
      <h1 className="register-title">Pet-Makers</h1>
      <div className="inputm">
        <div className="inputs">
          <input 
            type="text" 
            name="name" 
            placeholder="Nome do animal" 
            className="register-input"
            onChange={handleChangeValues}
            />
          <input 
            type="text" 
            name="age" 
            placeholder="Idade" 
            className="register-input"
            onChange={handleChangeValues}
            /> 

          <input 
            type="text" 
            name="breed" 
            placeholder="Raça" 
            className="register-input"
            onChange={handleChangeValues}
            />

          <input 
            type="text" 
            name="client" 
            placeholder="Nome do cliente" 
            className="register-input"
            onChange={handleChangeValues}
            />
          <input 
            type="text" 
            name="animal" 
            placeholder="Cachorro ou gato" 
            className="register-input"
            onChange={handleChangeValues}
            />
        
          <button className="register-button" 
            onClick={()=>handleClickButton()}>Cadastrar</button>
        </div>
      </div>
            {typeof listPets !== "undefined" && listPets.map((value) =>{
            return  <List 
                        key={value.id}
                        listPets={listPets}
                        setListPets={setListPets}
                        id={value.idpet}
                        name={value.name}
                        age={value.age}
                        breed={value.breed}
                        client={value.client}
                        animal={value.animal}>
                      </List>
            })}
    </div>
  );
}

export default App;
