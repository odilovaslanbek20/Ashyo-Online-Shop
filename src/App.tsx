import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/HomePages'
import ProductsPage from './pages/Products/ProductsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>
    </>
  )
}

export default App
