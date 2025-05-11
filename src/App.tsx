import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/Home/HomePages'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
      </Routes>
    </>
  )
}

export default App
