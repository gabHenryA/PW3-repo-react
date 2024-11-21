import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import CreateMaterial from './components/pages/CreateMaterial'
import ListMaterial from './components/pages/ListMaterial'
import DetailMaterial from './components/pages/DetailMaterial'
import DeleteMaterial from './components/pages/DeleteMaterial'
import UpdateMaterial from './components/pages/UpdateMaterial'

function App() {

  return (
    <>
      <BrowserRouter>
      
        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/listMaterial' element={<ListMaterial/>}/>
              <Route path='/createMaterial' element={<CreateMaterial/>}/>
              <Route path='/detailMaterial/:cod_material' element={<DetailMaterial/>}/>
              <Route path='/deleteMaterial/:cod_material' element={<DeleteMaterial/>}/>
              <Route path='/updateMaterial/:cod_material' element={<UpdateMaterial/>}/>
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>
    </>
  )
}

export default App
