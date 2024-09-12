import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import CreateMaterial from './components/pages/CreateMaterial'
import ListMaterial from './components/pages/ListMaterial'

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
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>
    </>
  )
}

export default App
