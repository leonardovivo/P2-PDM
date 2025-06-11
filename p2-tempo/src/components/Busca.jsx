import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('São Paulo')

  useEffect(() => {
    if (termoDeBusca.length < 3) {
      return
    }

    const fazerBusca = async () => {
      try {
        const resposta = await axios.get('http://localhost:5002/busca', {
          params: { query: termoDeBusca }
        })
        console.log(resposta.data)
      } catch (error) {
        console.error('Erro:', error)
      }
    }

    const timeoutID = setTimeout(() => {
      fazerBusca()
    }, 2000)
    return () => {
      clearTimeout(timeoutID)
    }
  }, [termoDeBusca])

  return (
    <div>
      <input
        type="text"
        value={termoDeBusca}
        onChange={(e) => setTermoDeBusca(e.target.value)}
      />
    </div>
  )
}

export default Busca