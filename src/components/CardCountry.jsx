

const CardCountry = ({ country }) => {
  const population = new Intl.NumberFormat('es-MX').format(country?.population)
  console.log(country);
  return (
    <article className="CardCountry">
      <img src={country?.flags.svg} alt={country?.flags.alt} />
      <section className="CardCountry__header">
        <h2 className="CardCountry__header--title">{country?.name.common}</h2>
        <img className="CardCountry__header--coatOfArms" src={country?.coatOfArms.svg} alt="coatOfArms" />
      </section>
      <section className="CardCountry__body">
      <ul className="CardCountry__body--info">
        <li><b>Official-name: </b>{country?.name.official}</li>
        <li><b>Capital: </b>{country?.capital[0]}</li>
        <li><b>Continent: </b>{country?.continents[0]}</li>
        <li><b>Language: </b>{
          country
            ? Object.values(country?.languages)[0]
            : ''}
        </li>
        <li><b>Population: </b>{population}</li>
        <li><b>Time-zone: </b>{country?.timezones[0]}</li>
        <li><b>Telephone-prefix: </b>{country?.idd.root}{country?.idd.suffixes[0]}</li>
        <li><b>Currency: </b>{
          country
            ? Object.values(country?.currencies)[0].name
            : ''}
        </li>
        <li><b>Currency symbol: </b>{
          country
            ? Object.values(country?.currencies)[0].symbol
            : ''}
        </li>
        <li><b>Ubication-geografic: </b><a href={country?.maps.googleMaps}>GoogleMap</a></li>
      </ul>
      
      </section>
    </article>
    
  )

}

export default CardCountry