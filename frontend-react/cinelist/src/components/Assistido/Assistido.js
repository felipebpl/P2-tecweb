import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Assistido.css";


export default function Assistido(props) {  

  const deleteFilme = () => {
    //deleta filme
    //para isso funcionar você deve implementar a ação de deletar no Django REST
    //Note que o comando abaixo envia uma requisição com o verbo DELETE
    axios
      .delete(`https://cinelist-backend.herokuapp.com/minha-lista/${props.id}`)
      .then((res) => props.reloadData());
  };

  return (
    <div>
        <h3>{props.title}</h3>
        <div >
          <span className="btn-icon btn-edit" onClick={deleteFilme}><i className="fas fa-trash-alt"></i></span>
        </div>
      <div >
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}
