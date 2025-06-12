import { Card } from 'primereact/card'

const MostrarResultados = ({ dados }) => {
  return (
    <div className='flex flex-wrap justify-content-center gap-6 mt-4 mb-4'>
      {dados.map((item, index) => (
        <Card
          key={index}
          title={item.descricao}
          className='w-12 sm:w-6 md:w-4 lg:w-3 text-center mt-3'>
          <img
            src={`https://openweathermap.org/img/wn/${item.nome_icone}@2x.png`}
            alt={item.descricao}
            className='mb-3 mx-auto'>
          </img>
          <p><strong>Mínima:</strong> {item.temperatura_minima}°C</p>
          <p><strong>Máxima:</strong> {item.temperatura_maxima}°C</p>
          <p><strong>Umidade:</strong> {item.umidade}%</p>
        </Card>
      ))}
    </div>
  )
}

export default MostrarResultados