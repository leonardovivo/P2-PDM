require('dotenv').config()
const axios = require('axios')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const apiKey = process.env.API_KEY

app.get('/busca', async (req, res) => {
  const cidade = req.query.query

  try {
    const resposta = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: cidade,
        appid: apiKey,
        units: 'metric',
        lang: 'pt_br'
      }
    })

    const resultado = resposta.data.list.map((item) => ({
     temperatura_minima: item.main.temp_min,
     temperatura_maxima: item.main.temp_max,
     umidade: item.main.humidity,
     nome_icone: item.weather[0].icon,
     descricao: item.weather[0].description
    }))


    console.log(`Cidade buscada: ${cidade}`)
    console.log(resultado)

    res.json(resultado)

  } catch (error) {
    console.error('Erro na consulta:', error.message)
    res.status(500).json({ erro: 'Erro na comunicação com a API da OpenWeatherMap' })
  }
})

const port = 5002
app.listen(port, () => console.log(`Backend funcionando. Porta: ${port}`))
