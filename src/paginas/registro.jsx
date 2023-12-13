import './registro.css';
import Navbar from '../Componentes/navbar';
import {dbis} from '../firebase'
import RegistroForm from '../Componentes/registroform';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registro () {

    const Navigate = useNavigate();
    const [visualizar, setvisualizar] = useState("");
    const auth = getAuth();
    const registrar= async (email,password,nombre) => {
        setvisualizar("0")
        try{
            const a = await createUserWithEmailAndPassword(dbis,email,password);
            updateProfile(auth.currentUser,{
                displayName:nombre,
                photoURL:""
            }).then(()=>{

            }).catch(()=>{

            })
            irhome()
        }catch(e){
            console.log(e)
            if(e == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).")
            {
                setvisualizar("1")
            }else if(e=="FirebaseError: Firebase: Error (auth/email-already-in-use).")
            {
                setvisualizar("2")
            }else if(e == "FirebaseError: Firebase: Error (auth/invalid-email).")
            {
                setvisualizar("3")
            }
        }
     }
    const login = () => {
        Navigate(`/Login/0`)
    }
    const irhome = () =>{
        Navigate(`/`)
    }
    return(
        <>
            <Navbar></Navbar>
            <div className='home-container'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-sm-4 col-xxl-3'>
                        <RegistroForm crear={registrar} login={login} visualizar={visualizar}></RegistroForm>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Registro