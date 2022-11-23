import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useFetch } from './hook/useFetch'
import Home from './pages/Home'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import { url } from './url/url'
import { Global } from './global/GlobalStyle'



function App() {

  const { data, loading, error } = useFetch(url)
  
  return (
    <BrowserRouter>
    <Global/>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
