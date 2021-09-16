import { useState, useEffect } from "react";
import api from "../../Api";
import NavBar from "../NavBar";
import '../../App.css'
import { Link } from 'react-router-dom'



function ProximosLancamentos () {

  const [proximosLancamentos, setProximosLancamentos] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/upcoming') 
      .then((response) => setProximosLancamentos(response.data))
  }, [])
    console.log(proximosLancamentos)

  return (
    <>
      <div className="Container">
        <p>
          <h3>Próximos Lançamento</h3>
          {proximosLancamentos.map((item) => {
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

export default ProximosLancamentos;
