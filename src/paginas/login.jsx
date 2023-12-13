import './registro.css';
import Navbar from '../Componentes/navbar'
import LoginForm from '../Componentes/loginform'
import {dbis} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


const Login = () => {

    const Navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const [visualizar, setvisualizar] = useState("");
    const {id} = useParams();

    const login = async (email,password) => {
        setvisualizar("0")
        try{
            const a = await signInWithEmailAndPassword(dbis,email,password);
            if(id==0)
            {
                irhome()
            }else{
                irdetalle()
            }
        }catch (e) {
            if(e == "FirebaseError: Firebase: Error (auth/invalid-credential).")
            {
                setvisualizar("1")
            }else if(e == "FirebaseError: Firebase: Error (auth/missing-password).")
            {
                setvisualizar("2")
            }else if(e == "FirebaseError: Firebase: Error (auth/invalid-email).")
            {
                setvisualizar("3")
            }
        }
     }
     const registrarse = () => {
        Navigate(`/Registro`);
     }
     const irhome = () => {
        Navigate(`/`);
     }

     const irdetalle = () =>{
        Navigate(`/Detalle/${id}`)
     }

    return (
        <>
        <Navbar></Navbar>
        <div className='home-container'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-sm-4 col-xxl-3'>
                        <LoginForm iniciar={login} registrarse={registrarse} valor={visualizar}></LoginForm>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login