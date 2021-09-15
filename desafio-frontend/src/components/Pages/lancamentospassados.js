import { useState, useEffect } from "react";
import api from "../../Api";
import NavBar from "../NavBar";
import '../../App.css'
import { Link } from 'react-router-dom'



function LancamentoPassados () {

  const [lancamentosPassados, setLancamentosPassados] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/past?limit=10') 
      .then((response) => setLancamentosPassados(response.data))
  }, [])
    console.log(lancamentosPassados)

  return (
    <>
      <NavBar />
      <div className="Container">
        <p>
          <h3>Lançamento Passados</h3>
          <h4><strong>Nome: </strong> {lancamentosPassados.mission_name} </h4>
          <h4><strong>Data/horário: </strong> {lancamentosPassados.launch_date_local} </h4>
        </p>
      </div>

    </>
  );
}

export default LancamentoPassados;
