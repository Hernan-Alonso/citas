import Form from './components/Form';
import Cita from './components/Cita';
import React,{useState, useEffect} from 'react';
function App() {
  //citas en LS
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  //arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);
  //useeffect para realizar operaciones para cuando el state cambia
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  },[citas])
  //funcion q tome las citas actuales  y las agregue la nueva
  const crearCita = cita =>{
    guardarCitas([...citas, cita]);
  }
  const eliminarCita = id=>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }
  //mensaje condicional
  const titulo = citas.length === 0 ?'No hay citas':'Administra tus citas';
  return (
    <>
    <h1>Administrador de citas</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form 
            crearCita = {crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita =>(
            <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita = {eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
