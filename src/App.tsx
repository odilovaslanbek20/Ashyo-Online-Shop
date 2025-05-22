import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/HomePages'
import ProductsPage from './pages/Products/ProductsPage'
import ProductDetails from './pages/Products/ProductsDetails'
import SavatchaPage from './pages/Savatcha/Savatcha'
import OtpPage from './pages/Auth/SendOtp'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Routes>
				<Route path='/' element={<HomePages />} />
				<Route path='/products' element={<ProductsPage />} />
				<Route path='/products/:id' element={<ProductDetails />} />
				<Route path='/addToCards' element={<SavatchaPage />} />
				<Route path='/otp' element={<OtpPage />} />
			</Routes>
		</>
	)
}

export default App
