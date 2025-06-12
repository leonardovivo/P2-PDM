import React, { useEffect, useState } from 'react'
import axios from 'axios'
import striptags from 'striptags'

const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('São Paulo')

  useEffect(() => {
    if (termoDeBusca.length < 3) 
      return
    

    const fazerBusca = async () => {
      try {
        const resposta = await axios.get('http://localhost:5002/busca', {
          params: { query: termoDeBusca }
        })


        const respostaLimpa = [{
          temperatura_minima: striptags(resposta.data.temperatura_minima.toString()),
          temperatura_maxima: striptags(resposta.data.temperatura_maxima.toString()),
          umidade: striptags(resposta.data.umidade.toString()),
          nome_icone: striptags(resposta.data.nome_icone),
          descricao: striptags(resposta.data.descricao)
        }]

        setDados(respostaLimpa)

      } catch (error) {
        console.error('Erro:', error)
        setDados([])
      }
    }

    const timeoutID = setTimeout(() => {
      fazerBusca()
    }, 2000)

    return () => clearTimeout(timeoutID)
  }, [termoDeBusca])

  return (
    <div className="flex flex-column align-items-center">
      <input
        type="text"
        value={termoDeBusca}
        onChange={(e) => setTermoDeBusca(e.target.value)}
      />
    </div>
  )
}

export default Busca
