import './home.css';
import Navbar from '../Componentes/navbar'
import Objecto from '../Componentes/objeto'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {db} from '../firebase'

function Home() { 
    
    const Navigate = useNavigate();
    const [visualizar, setvisualizar] = useState("")
    let items = []
    let unir=[]
    
    const getItems = async () => {
       const querySnapshot = await db.collection('item').get();
        querySnapshot.forEach(element => {
            items.push({...element.data(),id: element.id})
        });
        for(let i=0; i<items.length; i++)
        {
            unir.push(<div className='col-6 col-md-4 col-xxl-2 pt-3' key={items[i].id}> <Objecto items={items[i]} detalle={detalle}></Objecto></div>)
        }
        setvisualizar(unir)
        unir=[]
        items=[]
    }

    
    const detalle = (id) =>
    {
        Navigate(`/Detalle/${id}`);
    }
    
    useEffect(()=>{
        getItems()
    },[])
    
    return (
    <>
        <Navbar></Navbar>
        <div className='home-container'>
            <div className='container-fluid'>
                <div className='row verde'>
                        {visualizar}
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;
