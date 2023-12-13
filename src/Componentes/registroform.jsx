import './registroform.css';
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';


function RegistroForm({crear, login, visualizar}) {
  
  const Navigate = useNavigate();
  const [nombre,setnombre] = useState("");
  const [email,setemail] = useState("");
  const [nombrevisualizar,setnombrevisualizar] = useState("");
  const [mensajeemail,setmensajeemail] = useState("")
  const [password,setpassword] = useState("");
  const [mensajecontraseña, setmensajecontraseña] = useState("")

  const crearusuario = () => {
    if(nombre.length>=4)
    {
        crear(email,password,nombre)
        setnombrevisualizar("")
    }else{
        mensajenombre()
    }
  }

  const irlogin = () =>{
    login()
  }
  
  const mensajenombre = () =>{
    setnombrevisualizar(<div className='row pb-2'>
        <div className='col-12'>
            <label htmlFor="" className='registroform-rojo'>El nombre debe tener almenos 4 caracteres</label>
        </div>
        </div>)
  }

  const mensajeregistro = () => {
    setmensajeemail("");
    setmensajecontraseña("");
    if(visualizar == "1")
    {
        setmensajecontraseña(<div className='row pb-2'>
        <div className='col-12'>
            <label htmlFor="" className='registroform-rojo'>La contraseña debe tener almenos 6 caracteres</label>
        </div>
        </div>)
    }else if(visualizar=="2")
    {
        setmensajeemail(<div className='row pb-2'>
        <div className='col-12'>
            <label htmlFor="" className='registroform-rojo'>El Email ya Existe</label>
        </div>
        </div>)
    }else if(visualizar == "3")
    {
        setmensajeemail(<div className='row pb-2'>
        <div className='col-12'>
            <label htmlFor="" className='registroform-rojo'>Ingrese un Email Valido</label>
        </div>
        </div>)
    }
}

useEffect(() => {
    mensajeregistro()
},[visualizar])
  return (
    <>
        <form>
            <div className='container-fluid registroform-container mt-3 px-4 py-3'>
                <div className='row pb-2 text-center'>
                    <div className='col-12'>
                            <div className='registroform-titulo'>Registro</div>
                    </div>
                </div>
                <div className='row pb-2'>
                    <div className='col-12'>
                            <label htmlFor="">Nombre</label>
                    </div>
                </div>
                <div className='row pb-2'>
                    <div className='col-12'>
                            <input type="text" className='w-100' onChange={(e)=>{ setnombre(e.target.value)}}/>
                    </div>
                </div>
                {nombrevisualizar}
                <div className='row pb-2'>
                    <div className='col-12'>
                            <label htmlFor="">Correo Electrónico</label>
                    </div>
                </div>
                <div className='row pb-2'>
                    <div className='col-12'>
                            <input type="email" className='w-100' onChange={(e)=>{ setemail(e.target.value)}}/>
                    </div>
                </div>
                {mensajeemail}
                <div className='row pb-2'>
                    <div className='col-12'>
                        <label htmlFor="">Contraseña</label>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-12'>
                        <input type="password" className='w-100' onChange={(e)=>{ setpassword(e.target.value)}}/>
                    </div>
                </div>
                {mensajecontraseña}
                <div className='row pb-2'>
                    <div className='col-12'>
                        <button type='button' className='btn btn-primary w-100' onClick={crearusuario}>Registrarse</button>
                    </div>
                </div>
                <div className='row pb-2 text-center'>
                    <div className='col-12'>
                        <a onClick={irlogin}>Login</a>
                    </div>
                </div>
            </div>
        </form>
    </>
  );
}

export default RegistroForm;
