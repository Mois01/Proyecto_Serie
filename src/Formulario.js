import React, { useState } from 'react';
import serie from './serieN';

export default function Formulario() {
const [ numero, setNumero] = useState('');
  
const Guardar=()=>{
    alert("El formulario se ha enviado")
   serie (numero);  
} ;

const MostraResultado=()=>{
    alert("El Resultado "+ serie(numero))
 } ;
const handleSubmit = (e) => {
e.preventDefault();


}

  return (
    <>
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="numero">Numero</label>
                <input type="text"
                className="form-control" name="numero" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                <button type='submit' onClick={Guardar}>Guardar</button>  
                <button onClick={MostraResultado}>Mostrar Resultado</button>             
            </div>
        </form>
    </>
  );
}


