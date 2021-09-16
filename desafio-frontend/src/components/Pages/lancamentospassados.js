import { useState, useEffect } from "react";
import api from "../../Api";
import NavBar from "../NavBar";
import '../../App.css'
import { Link } from 'react-router-dom'



function LancamentoPassados () {

  const [lancamentosPassados, setLancamentosPassados] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/past') 
      .then((response) => setLancamentosPassados(response.data))
  }, [])
    console.log(lancamentosPassados)

  return (
    <>
      <div className="Container">
        <p>
          <h3>Lançamento Passados</h3>
          {lancamentosPassados.slice(0, 10).map((item) => {
            return (
              <p key={item.launch_date_unix}>
                <h4><strong>Nome: </strong> {item.mission_name} </h4>
                <h4><strong>Data/horário: </strong> {item.launch_date_local} </h4>
              </p>
            )
          })}

        </p>
      </div>

    </>
  );
}

export default LancamentoPassados;
