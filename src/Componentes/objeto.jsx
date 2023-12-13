import './objeto.css';

function Objeto({items, detalle}) {
  
    const enviardetalle = () => {
        detalle(items.id)
    }
    return (
    <div className='container objeto-container'>
        <div className='row py-2'>
            <div className='col-6 col-sm-8'>
                <div className='objeto-nombre'>{items.nombre}</div>
            </div>
            <div className='col-6 col-sm-4'>
                <div className='objeto-precio'>${items.precio}</div>
            </div>
        </div>
        <div className='row py-2 text-center'>
            <div className='col-12'>
                <img src={items.img} alt="" className='objeto-img'/>
            </div>
        </div>
        <div className='row'>
            <hr></hr>
        </div>
        <div className='row py-2'>
            <div className='col-12'>
                <p className='objeto-texto'>{items.descripcion}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <div className='objeto-sku'>sku:{items.sku}</div>
            </div>
            <div className='col-6'>
                <div className='objeto-cantidad'>cantidad: {items.cantidad}</div>
            </div>
        </div>
        <div className='row'>
            <hr></hr>
        </div>
        <div className='row'>
            <div className='col-12 d-grid pb-3'>
                <button type="button" className='btn btn-primary objeto-boton' onClick={enviardetalle}>Detalle</button>
            </div>
        </div>
    </div>
  );
}

export default Objeto;
