import React from 'react'
import Minhalista from '../Minhalista/Minhalista'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Assistidos(){
    const [filmes, setFilmes] = useState([]); // Remova o array de notes que existia na versão anterior

    const loadData = () => {
      axios
        .get("https://cinelist-backend.herokuapp.com/minha-lista/")
        .then((res) => console.log(res.data));
    }
  
    useEffect(() => {
      loadData();
    }, []);

    return (
    // <h1 className="assistidos"> MINHA LISTA</h1>
    <div>
      {/* <span className="btn-icon btn-edit" onClick={loadData}><i className="fas fa-trash-alt"></i></span> */}

      <Minhalista filmesList={filmes} loadData={loadData}/>
    </div>



    ); 
}