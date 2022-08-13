import React, {useState} from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [values, setValues] = useState();

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
  }).then((response) => {
    console.log(response);
  })
  }

  return (
    <div className="app-container">
      <h1 className="register-title">Pet-Makers</h1>
          <input 
            type="text" 
            name="name" 
            placeholder="Nome" 
            className="register-input"
            onChange={handleChangeValues}
            />
          <input 
            type="text" 
            name="age" 
            placeholder="Idade" 
            className="register-input"
            onChange={handleChangeValues}
            /> <br />

          <input 
            type="select" 
            name="breed" 
            placeholder="Raça" 
            className="register-input"
            onChange={handleChangeValues}
            />
            <select
              className="register-input"
              name="tipo" >
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
        
          <button className="register-button" 
            onClick={()=>handleClickButton()}>Cadastrar</button>
    </div>
  );
}

export default App;
