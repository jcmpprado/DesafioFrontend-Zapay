import { useState, useEffect } from "react";
import api from "../../Api";
import NavBar from "../NavBar";
import '../../App.css'
import { Link } from 'react-router-dom'



function UltimoLancamento () {

  const [ultimoLancamento, setUltimoLancamento] = useState([])
  useEffect( () => {
    api
      .get('/v4/launches/latest') 
      .then((response) => setUltimoLancamento(response.data))
  }, [])
    console.log(ultimoLancamento)

  return (
    <>
      <div className="Container">
        <p>
          <h3>Último Lançamento</h3>
          <h4><strong>Nome: </strong> {ultimoLancamento.name} </h4>
          <h4><strong>Data/horário: </strong> {ultimoLancamento.date_local} </h4>
        </p>
      </div>

    </>
  );
}

export default UltimoLancamento;
