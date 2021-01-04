import Form from './components/Form';
import Appointment from './components/Appointment';
import React,{useState, useEffect} from 'react';
function App() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments){
    initialAppointments = [];
  }
  const [appointments, setAppointments] = useState(initialAppointments);
  useEffect(()=>{
    if(initialAppointments){
      localStorage.setItem('appointments',JSON.stringify(appointments));
    }else{
      localStorage.setItem('appointments',JSON.stringify([]));
    }
  },[appointments])
  const createAppointment = appointment =>{
    setAppointments([...appointments, appointment]);
  }
  const deleteAppointment = id=>{
    const newAppointment = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointment);
  }
  const title = appointments.length === 0 ?'No hay citas':'Administra tus citas';
  return (
    <>
    <h1>Administrador de citas</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form 
            createAppointment = {createAppointment}
          />
        </div>
        <div className="one-half column">
          <h2>{title}</h2>
          {appointments.map(appointment =>(
            <Appointment 
              key={appointment.id}
              appointment={appointment}
              deleteAppointment = {deleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
