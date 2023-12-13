import './mensajepantalla.css';
import { useEffect, useState } from 'react';


function MensajePantalla({volver, iniciar}) {
    
    const iniciarsesion = () => {
        iniciar()
    }
    
    const volveratras = () =>{
        volver()
    }
    

    return (
    <>
        <form>
            <div className='container-fluid mensajepantalla-container mt-3 px-4 py-3'>
                <div className='row pt-2 pb-3 text-center'>
                    <div className='col-12'>
                            <div className='mensajepantalla-titulo'>Aviso</div>
                    </div>
                </div>
                <div className='row pb-4 text-center'>
                    <div className='col-12'>
                        <div className='mensajepantalla-mensaje'>
                            Para poder comprar el Producto debe Iniciar Sesion
                        </div>
                    </div>
                </div>
                <div className='row pb-2'>
                    <div className='col-6'>
                        <button type='button' className='btn btn-secondary w-100' onClick={volver}>Volver</button>
                    </div>
                    <div className='col-6'>
                        <button type='button' className='btn btn-primary w-100' onClick={iniciarsesion}> Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  );
}

export default MensajePantalla;
