import { useState, useEffect } from "react";
import api from "../../../Api";
import NavBar from "../../NavBar/index";
import './index.css'

function App () {

  const [proLancamento, setProLancamento] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/upcoming?limit=5') 
      .then((response) => setProLancamento(response.data))
  }, [])

  return (
    <>
      <NavBar />
      <h1 >Lançamentos</h1>
      <div className="Container">
        <h3>Próximos Lançamento</h3>
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
