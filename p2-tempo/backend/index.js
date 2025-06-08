require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.API_KEY
const nomeCidade = 'São Paulo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${apiKey}&units=metric&lang=pt_br`


consulta = async () => {
    try{
const resposta = await axios.get(url);

const resultado = {
    temperatura_minima: resposta.data.main.temp_min,
    temperatura_maxima: resposta.data.main.temp_max,
    umidade: resposta.data.main.humidity,
    nome_icone: resposta.data.weather[0].icon,
    descricao: resposta.data.weather[0].description
}

console.log(resultado);

} catch(error){
    console.log('Houve um erro!', error);
}
}

consulta();