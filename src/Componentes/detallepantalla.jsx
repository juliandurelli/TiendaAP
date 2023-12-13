import './detallepantalla.css';
import {useParams} from 'react-router-dom'

function DetallePantalla({item, volver, comprar}) {
  
    const {id} = useParams();

    const comprarobjecto = () => {
        comprar()
    }
    const accionvoler = () => {
        volver()
    }

    return (
    <div className='container detalle-container'>
        <div className='row'>
            <div className='col-9 p-3 detalle-nombre'>
                {item.nombre}
            </div>
            <div className='col-3 p-3 detalle-precio'>
                ${item.precio}
            </div>
        </div>
        <div className='row'>
            <hr></hr>
        </div>
        <div className='row py-2 text-center'>
            <div className='col-12'>
                <img src={item.img} alt="" className='img-thumbnail objeto-img'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6 p-3 detalle-contenido'>
                Contenido: <strong>{item.contenido}</strong>
            </div>
            <div className='col-6 p-3 detalle-marca'>
                Marca: <strong>{item.marca}</strong>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 p-3 detalle-descripcion'>
                {item.descripcion}
            </div>
        </div>
        <div className='row'>
            <div className='col-6 p-3 detalle-sku'>
                sku: {item.sku}
            </div>
            <div className='col-6 p-3 detalle-cantidad'>
                Cantidad: {item.cantidad}
            </div>
        </div>
        <div className='row justify-content-center text-center'>
            <div className='col-4 p-3'>
                <p className='detalle-texto'><strong className='detalle-envio'>Envio Gratis</strong> a todo el pais</p>
            </div>
            <div className='col-4 p-3 detalle-cuotas'>
                3 Cuotas <strong className='detalle-envio'>sin interes</strong>
            </div>
            <div className='col-4 p-3 detalle-vendedor'>
                Vendedor <strong className='detalle-envio'>Recomendado</strong>
            </div>
        </div>
        <div className='row'>
            <hr></hr>
        </div>
        <div className='row pt-2 pb-4 justify-content-center'>
            <div className='col-6 d-grid'>
                <button type='button' className='btn btn-secondary' onClick={accionvoler}>Volver</button>
            </div>
            <div className='col-6 d-grid'>
                <button type='button' className='btn btn-primary' onClick={comprarobjecto}>Comprar</button>
            </div>
        </div>
    </div>
  );
}

export default DetallePantalla;
