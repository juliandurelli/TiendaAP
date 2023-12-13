import {Route, Routes} from 'react-router-dom'
import Home from './paginas/home'
import Detalle from './paginas/detalle'
import Login from './paginas/login'
import Registro from './paginas/registro'

export const Rutas = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Detalle/:id" element={<Detalle/>}></Route>
            <Route path="/Login/:id" element={<Login/>}></Route>
            <Route path="/Registro" element={<Registro/>}></Route>
        </Routes>
    )
}

export default Rutas