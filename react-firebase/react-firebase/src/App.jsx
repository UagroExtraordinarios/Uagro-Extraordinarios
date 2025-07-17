import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

/*Layout*/ 
import Header from "./components/layout/Header"
import Navegacion from "./components/layout/Navegacion"

import { AuthProvider } from "./components/context/AuthContext"
import ProtectedRoute from './components/auth/ProtectedRoute'

import Docentes from './components/docentes/Docentes'

import Login from './components/auth/Login'

/*Componentes*/
// import Clientes from './components/clientes/Clientes'
// import NuevoCliente from './components/clientes/NuevoCliente'
// import EditarCliente from './components/clientes/EditarCliente'


// import { CRMContext, CRMProvider } from './context/CRMContext'

function App() {


  return (
    <Router>
      {/* <CRMProvider value={[auth, guardarAuth]}> */}
      <AuthProvider>
        <Header/>
        <div className="grid contenedor contenido-principal">
            
          <Navegacion/>

          <main className="caja-contenido col-9">
            <Routes>
              
              <Route path="/" element={
                <ProtectedRoute>
                  <Docentes/>
                </ProtectedRoute>
              }/>

              {/* <Route path="/clientes/nuevo" element={<NuevoCliente/>} /> */}
              {/* <Route path="/clientes/editar/:id" element={<EditarCliente/>} /> */}

              {/* <Route path="/productos" element={<Productos/>} /> */}
              {/* <Route path="/productos/nuevo" element={<NuevoProducto/>} /> */}
              {/* <Route path="/productos/editar/:id" element={<EditarProducto/>} /> */}

              {/* <Route path="/pedidos" element={<Pedidos/>} /> */}
              {/* <Route path="/pedidos/nuevo/:id" element={<NuevoPedido/>} /> */}

              <Route path='/iniciar-sesion' element={<Login/>}/>
            </Routes>        
          </main>
        </div>
      </AuthProvider>
      {/* </CRMProvider> */}
    </Router>
  )
}

export default App
