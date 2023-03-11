import './App.css';
import RegistroUsuario from './component/RegistroUsuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InicioSesion from './component/InicioSesion';
import Login from './component/Login';
import Post from './componentes_publicar/Post';
import UnPost from './componentes_publicar/UnPost';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes >                 
          <Route path='/login' element={ <Login/>} />
          <Route path='/crear' element={ <Post/>} />
          <Route path='/unpost/:id'element={<UnPost/>}/>
      
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
