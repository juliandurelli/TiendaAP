import './loginform.css';
import { useEffect, useState } from 'react';


function LoginForm({iniciar,registrarse, valor}) {
  
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [mensajeemail,setmensajeemail] = useState("");
  const [mensajecontraseña,setmensajecontraseña] = useState("");
  
  const login = () =>{
    iniciar(email,password)
  }

  const registrarusuario = () =>{
    registrarse()
  }

    const mensajelogin = () => {
        setmensajeemail("");
        setmensajecontraseña("");
        if(valor == "1")
        {
            setmensajecontraseña(<div className='row pb-2'>
            <div className='col-12'>
                <label htmlFor="" className='loginform-rojo'>Email o Contraseña Incorrecta</label>
            </div>
            </div>)
        }else if(valor=="2")
        {
            setmensajecontraseña(<div className='row pb-2'>
            <div className='col-12'>
                <label htmlFor="" className='loginform-rojo'>Ingrese Contraseña</label>
            </div>
            </div>)
        }else if(valor == "3")
        {
            setmensajeemail(<div className='row pb-2'>
            <div className='col-12'>
                <label htmlFor="" className='loginform-rojo'>Ingrese Email</label>
            </div>
            </div>)
        }
    }

  useEffect(() => {
        mensajelogin()
  },[valor])

  return (
    <>
        <form>
            <div className='container-fluid loginform-container mt-3 px-4 py-3'>
                <div className='row pb-2 text-center'>
                    <div className='col-12'>
                            <div className='loginform-titulo'>Login</div>
                    </div>
                </div>
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
                        <button type='button' className='btn btn-primary w-100' onClick={login}>Iniciar Sesion</button>
                    </div>
                </div>
                <div className='row pb-2 text-center'>
                    <div className='col-12'>
                        <a onClick={registrarusuario}>Registrarse</a>
                    </div>
                </div>
            </div>
        </form>
    </>
  );
}

export default LoginForm;
