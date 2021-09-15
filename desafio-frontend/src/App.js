import { useState, useEffect } from "react";
import api from "./Api";
import NavBar from "./components/NavBar";
import './App.css'



function App () {

  
  const [proLancamento, setProLancamento] = useState([])
  useEffect( () => {
    api
      .get('/v3/launches/upcoming?limit=1') 
      .then((response) => setProLancamento(response.data))
  }, [])

  return (
    <>
      <NavBar />
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


  // const [lancamento, setLancamento] = useState([])
  // useEffect( () => {
  //   api
  //     .get('/v4/launches/latest') 
  //     .then((response) => setLancamento(response.data))
  // }, [])
  //   console.log(lancamento)

  // return (
  //   <>
  //     <NavBar />
  //     <h1>Lançamentos </h1>
  //     <div className="Container">
  //       <p>
  //         <h3>Último Lançamento</h3>
  //         <h4><strong>Nome: </strong> {lancamento.name} </h4>
  //         <h4><strong>Data/horário: </strong> {lancamento.date_local} </h4>
  //       </p>
  //     </div>

  //   </>
  // );
}

export default App;
