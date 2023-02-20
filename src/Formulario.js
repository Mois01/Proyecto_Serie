import React, { useState } from 'react';
import serie from './serieN';

export default function Formulario() {
    const [ numero, setNumero] = useState('');
    
    const Guardar=()=>{
        alert("El formulario se ha enviado")
    serie (numero);  
    } ;

    const MostraResultado=()=>{
        alert("El Resultado " + serie(numero));
    } ;

    const handleSubmit = (e) => {
    e.preventDefault();

    }

    return (
        <>
            <h1 className='App'>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <div className="App">
                    <label htmlFor="numero">Numero  </label>
                    <input type="text" className="form-control" name="numero" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                        <button type='submit' onClick={Guardar} style={{background: 'blue', color: 'white'}}> Guardar </button>  
                    <p></p>
                        <button variant="primary" onClick={MostraResultado} style={{background: 'yellow', color: 'black'}}> Mostrar Resultado </button> 
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
                        <img src="https://reactjs.org/logo-og.png" alt='Imagen' style={{ width: '500px', height: '300px', borderRadius: '50%' }}/>        
                    </div>
                </div>
            </form>
        </>
    );
    }


