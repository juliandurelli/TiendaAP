import './comprarpantalla.css';
import { useEffect, useState } from 'react';
import {getAuth} from 'firebase/auth';


function ComprarPantalla({item,volver, cantidad, valor}) {

    const auth = getAuth();
    const user = auth.currentUser;

const volveracomprar = () =>{
    volver()
}

    return (
    <>
        <form>
            <div className='container-fluid loginform-container mt-3 px-4 py-3'>
                <div className='row pt-2 pb-3 text-center'>
                    <div className='col-12'>
                            <div className='comprarpantalla-titulo'>Resumen Compra</div>
                    </div>
                </div>
                <div className='row pb-2 text-center'>
                    <div className='col-12'>
                        <div>
                           El Usuario <strong>{user.displayName}</strong> Compro <strong>{cantidad}</strong> items de <strong>{item.nombre}</strong>
                        </div>
                    </div>
                </div>
                <div className='row pb-2 text-center' >
                    <div className='col-6'>
                        <div>
                            Cantidad por item: <strong>{item.contenido}</strong>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            Marca: <strong>{item.marca}</strong>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <hr></hr>
                </div>
                <div className='row pb-2 text-center'>
                    <div className='col-6'>
                        <div>
                            <strong>Envio Gratis</strong>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <strong>$0</strong>
                        </div>
                    </div>
                </div>
                <div className='row pb-2 text-center'>
                    <div className='col-6'>
                        <div>
                            <strong>Items</strong>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div><strong>${valor}</strong> </div>
                    </div>
                </div>
                <div className='row pb-2 text-center'>
                    <div className='col-6'>
                        <div>
                            <strong>Precio Total:</strong> 
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <strong>${valor}</strong>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <hr></hr>
                </div>
                <div className='row pb-3 text-center'>
                    <div className='col-12'>
                        <div>Muchas Gracias por su compra</div>
                    </div>
                </div>
                <div className='row pb-2'>
                    <div className='col-12'>
                        <button type='button' className='btn btn-primary w-100' onClick={volveracomprar}> Volver a la tienda</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  );
}

export default ComprarPantalla;
