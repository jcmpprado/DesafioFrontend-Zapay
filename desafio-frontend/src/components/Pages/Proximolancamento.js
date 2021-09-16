import { useState, useEffect } from "react";
import api from "../../Api";
import NavBar from "../NavBar";
import '../../App.css'
import { Link } from 'react-router-dom'


function App () {

  const [proLancamento, setProLancamento] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/upcoming?limit=1') 
      .then((response) => setProLancamento(response.data))
  }, [])

  return (
    <>
        <div className="Container">
        <h3>Próximo Lançamento</h3>
        {proLancamento.map(proLancamento=>{
          return (
            <p key={proLancamento.data}>
              <h4><strong>Nome: </strong> {proLancamento.mission_name} </h4>
              <h4><strong>Data/horário: </strong> {proLancamento.launch_date_local} </h4>
            </p>
          )
        })             
        }
      </div>
    </>
  );

}

export default App;
