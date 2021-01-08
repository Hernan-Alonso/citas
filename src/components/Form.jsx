import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const Form = ({createAppointment}) =>{
    const[appointment, setAppointment] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const[error, setError] = useState(false);
    const setState = e =>{
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    };
    const {mascota, propietario, fecha, hora, sintomas} = appointment;

    const submitAppointment = e =>{
       e.preventDefault();
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return;
        }
        setError(false);
        appointment.id = uuidv4();
        console.log(appointment);
        createAppointment(appointment);
       setAppointment({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
       })
    }
    return(
        <>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitAppointment}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={setState}
                    value={mascota}
                />
                 <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={setState}
                    value={propietario}
                />
                 <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={setState}
                    value={fecha}
                />
                 <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={setState}
                    value={hora}
                />
                 <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={setState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </>
    );
}

export default Form;