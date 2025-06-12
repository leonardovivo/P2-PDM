import React, { useState } from 'react'
import Busca from './components/Busca'
import MostrarResultados from './components/MostrarResultados'

const App = () => {
  const [dados, setDados] = useState([])

  return (
    <div>
      <Busca setDados={setDados} />
      <MostrarResultados dados={dados} />
    </div>
  )
}

export default App
