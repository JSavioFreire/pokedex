import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useFetch } from './hook/useFetch'
import Home from './pages/Home'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import { url } from './url/url'
import { Global, theme } from './global/GlobalStyle'
import { ThemeProvider } from 'styled-components'



function App() {

  const { data, loading, error } = useFetch(url)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Global />
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home data={data} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
