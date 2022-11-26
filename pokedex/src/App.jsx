import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useFetch } from './hook/useFetch'
import { useState } from 'react'

import { Global, theme } from './global/GlobalStyle'
import { ThemeProvider } from 'styled-components'

import Home from './pages/home/Home'
import Surpresa from './pages/surpresa/surpresa'
import Pokemons from './pages/pokemons/Pokemons'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { PokemonsContextProvider } from './context/PokemonsContext'

import { changeUrl } from './url/url'
import { urlMoreName } from './url/url'


function App() {
  const [qtd, setQtd] = useState(12)
  if (qtd > 905) {
    setQtd(905)
  }

  const { data, loading } = useFetch(changeUrl(qtd))

  return (
    <ThemeProvider theme={theme}>
      <PokemonsContextProvider>
        <BrowserRouter>
          <Global />
          <Header />
          <Routes>
            <Route path='/' element={<Home data={data} loading={loading} qtd={qtd} setQtd={setQtd} />} />
            <Route path='/surpresa' element={<Surpresa />} />
            <Route path='/pokemons' element={<Pokemons />} />
          </Routes>
          <Footer urlMoreName={urlMoreName} />
        </BrowserRouter>
      </PokemonsContextProvider>
    </ThemeProvider>
  )
}

export default App
