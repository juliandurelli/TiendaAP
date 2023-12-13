import './detalle.css';
import {useParams} from 'react-router-dom'
import Navbar from '../Componentes/navbar';
import {db} from '../firebase'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import DetallePantalla from '../Componentes/detallepantalla'
import { getAuth } from 'firebase/auth';
import ComprarPantalla from '../Componentes/comprarpantalla';
import MensajePantalla from '../Componentes/mensajepantalla';
import DetalleCompraPantalla from '../Componentes/detallecomprapantalla'

function Detalle() {
  
    const auth = getAuth();
    const Navigate = useNavigate();
    const [visualizar,setvisualizar] = useState("")
    const {id} = useParams();
    let items=[]
    let itemcomprar={}

    const volver = () =>{
        Navigate(`/`);
    }

    const volveradetalle = () =>{
        visualizardetalle()
    }
    
    const volvertienda = () =>{
        Navigate(`/`)
        
    }

    const iniciar = () => {
        Navigate(`/Login/${id}`)
    }

    const comprar = () => {
        let user = auth.currentUser
        if(user)
        {
            visualizarcompra()
            
        }else{
            visualizarmensaje()
        }
    }
    const compraropcion = (cantidad,valor) => {
        visualziarresumen(cantidad,valor)

    }
    
    const visualizardetalle = () =>{
        setvisualizar(<div className='col-5 pt-4'><DetallePantalla item={itemcomprar} volver={volver} comprar={comprar}></DetallePantalla></div>)
    }
    const visualizarcompra = () =>{
        setvisualizar(<div className='col-5 pt-4'><ComprarPantalla item={itemcomprar} volver={volveradetalle} comprar={compraropcion}></ComprarPantalla></div>)
    }
    const visualizarmensaje = () =>{
        setvisualizar(<div className='col-5 pt-4'><MensajePantalla volver={volveradetalle} iniciar={iniciar}></MensajePantalla></div>)
    }
    const visualziarresumen = ( cantidad,valor) =>{
        setvisualizar(<div className='col-5 pt-4'><DetalleCompraPantalla item={itemcomprar} volver={volvertienda} cantidad={cantidad} valor={valor}></DetalleCompraPantalla></div>)    
    }

    const getItems = async () => {
        const querySnapshot = await db.collection('item').get();
         querySnapshot.forEach(element => {
             items.push({...element.data(),id: element.id})
         });
         for(let i=0; i<items.length;i++)
         {
            if(items[i].id==id)
            {
                itemcomprar = items[i];
                visualizardetalle()
            }
         }
         items=[]

     }
     useEffect(() => {
        getItems()
     },[])
    return (
    <>
        <Navbar></Navbar>
        <div className='home-container'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                        {visualizar}
                </div>
            </div>
        </div>
    </>
  );
}

export default Detalle;
