import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/HomePages'
import ProductsPage from './pages/Products/ProductsPage'
import ProductDetails from './pages/Products/ProductsDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App
