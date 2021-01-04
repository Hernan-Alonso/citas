import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const Form = ({crearCita}) =>{
    //Crear State de citas
    const[cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const[error, actualiazrError] = useState(false);
    //funcion onchange
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };
    //extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //agregar on submit
    const submitCita = e =>{
       e.preventDefault();
       //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualiazrError(true)
            return;
        }
        //eliminar mensaje
        actualiazrError(false);
       //asignar ID
        cita.id = uuidv4();
        console.log(cita);
       //crear cita
        crearCita(cita);
       //reiniciar form
       actualizarCita({
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
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                 <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                 <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                 <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                 <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
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