const CardCountry = ({ country }) => {
  const population = new Intl.NumberFormat('es-MX').format(country?.population)

  return (
    <article className="content__cardCountry">
      <img src={country?.flags.svg} alt={country?.flags.alt} />
      <section className="cardCountry__name">
        <h2>{country?.name.common}</h2>
        <img className="coatOfArms" src={country?.coatOfArms.svg} alt="coatOfArms" />
      </section>
      <ul className="cardCountry__info">
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
            ? Object.values(country.currencies)[0].name
            : ''}
        </li>
        <li><b>Currency symbol: </b>{
          country
            ? Object.values(country?.currencies)[0].symbol
            : ''}
        </li>

      </ul>
    </article>
  )

}

export default CardCountry