import './navbar.css';
import {useNavigate, useResolvedPath} from 'react-router-dom'
import {getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState} from 'react';



function Navbar() {
  const auth = getAuth();
  const [visualizar,setvisualizar] = useState("");
  const [visualizarcambio,setvisualizarcambio] = useState("");
  const user = auth.currentUser;
  const Navigate = useNavigate();
  const visualizarvalores = () =>{
      if(user)
      {
        setvisualizar(<><a className='navbar-usuario'>Usuario : {user.displayName}</a><button type='button' className='btn btn-light d-flex px-5 py-2 mx-3' onClick={logout}>Logout</button></>)
      }else{
        setvisualizar(<button type='button' className='btn btn-light d-flex px-5 py-2 mx-3' onClick={login}>Login</button>)
      }
  }
  useEffect(()=>{
    onAuthStateChanged(auth,()=>{
      visualizarvalores()
    })
  },[])

  const logout = async () =>{
    const response = await signOut(auth)
    setvisualizar(<button type='button' className='btn btn-light d-flex px-5 py-2 mx-3' onClick={login}>Login</button>)
  }
  const login = () =>{
    Navigate(`/Login/0`);
  }
  const home = () => {
    Navigate(`/`);
  }
  return (
    <>
        <nav className='navbar bg-body-tertiary p-0 m-0'>
         <div className='container-fluid navbar-container px-5 py-2 m-0'>
                <a className='navbar-opciones' onClick={home}>TiendaAP</a>
                {visualizar}
          </div>
        </nav>
    </>
  );
}

export default Navbar;
