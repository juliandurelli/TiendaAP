import './comprarpantalla.css';
import { useEffect, useState } from 'react';


function ComprarPantalla({item,volver,comprar}) {
  
  const [totalcantidad,settotatalcantidad] = useState(0)
  const [totalvalor,settotalvalor] = useState(0);
  const [visualizar,setvisualizar] = useState("")
  let cantidadvalor = 0;

  const avisofaltacantidad = () =>{
        setvisualizar(<div className='row pb-2'> <div className='col-12'><div className='comprarpantalla-aviso'>Debes Ingresar una Cantidad para poder Comprar</div></div></div>)
  }

  const total = (valor) => {
    cantidadvalor=valor
    settotatalcantidad(cantidadvalor)
    settotalvalor(cantidadvalor*item.precio);
  }
const volveratras = () =>{
    volver()
}

const comprarobjeto = () =>{
    if(totalcantidad!=0)
    {
        comprar(totalcantidad,totalvalor)
    }else{
        avisofaltacantidad()
    }
}
    return (
    <>
        <form>
            <div className='container-fluid comprarpantalla-container mt-3 px-4 py-3'>
                <div className='row pt-2 pb-3 text-center'>
                    <div className='col-12'>
                            <div className='comprarpantalla-titulo'>Comprar Articulo</div>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-6'>
                        <div className='comprarpantalla-nombre'>
                            <strong>{item.nombre}</strong>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='comprarpantalla-marca'>
                            Marca: <strong>{item.marca}</strong>
                        </div>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-6'>
                        <div className='comprarpantalla-cantidad'>
                            Envase de: <strong>{item.contenido}</strong>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='comprarpantalla-sku'>
                            SKU: <strong>{item.sku}</strong>
                        </div>
                    </div>
                </div>
                <div className='row pb-4'>
                    <div className='col-12'>
                        <div className='comprarpantalla-descripcion'>
                            Descripcion: <strong>{item.descripcion}</strong>
                        </div>
                    </div>
                </div>
                <div className='row pb-4'>
                    <div className='col-6'>
                            <label htmlFor="" className='pb-3 comprarpantalla-ingrese'>Ingrese la cantidad a comprar</label>
                            <input type="number" min="1" name="" id="" className='w-100 comprarpantalla-input' onChange={(e) => {
                                if(e.target.value<1)
                                {
                                    e.target.value=1;
                                    total(e.target.value)
                                }else if(e.target.value>item.cantidad)
                                {
                                    e.target.value=item.cantidad
                                    total(e.target.value)
                                }else{
                                    total(e.target.value)
                                }
                                setvisualizar("")
                                }}/>
                    </div>
                    <div className='col-6'>
                        <div className='comprarpantalla-preciounidad pb-3'>
                            Precio por unidad: ${item.precio}
                        </div>
                        <div className='comprarpantalla-preciototal'>
                            precio Total: $ {totalvalor}
                        </div>
                    </div>
                </div>
                {visualizar}
                <div className='row pb-2'>
                    <div className='col-6'>
                        <button type='button' className='btn btn-secondary w-100' onClick={volveratras}>Volver</button>
                    </div>
                    <div className='col-6'>
                        <button type='button' className='btn btn-primary w-100' onClick={comprarobjeto}> comprar</button>
                    </div>
                </div>
            </div>
        </form>
    </>
  );
}

export default ComprarPantalla;
