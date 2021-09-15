import { useState, useEffect } from "react";
import api from "../../Api";
import NavBar from "../NavBar";
import '../../App.css'
import { Link } from 'react-router-dom'



function ProximosLancamentos () {

  const [proximosLancamentos, setproximosLancamentos] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/upcoming') 
      .then((response) => setproximosLancamentos(response.data))
  }, [])
    console.log(proximosLancamentos)

  return (
    <>
      <NavBar />
      <div className="Container">
        <p>
          <h3>Próximos Lançamento</h3>
          <h4><strong>Nome: </strong> {proximosLancamentos.mission_name} </h4>
          <h4><strong>Data/horário: </strong> {proximosLancamentos.launch_date_local} </h4>
        </p>
      </div>

    </>
  );
}

export default ProximosLancamentos;
