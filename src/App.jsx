import axios from 'axios'
import { useEffect, useState } from 'react'
import CardCountry from './components/CardCountry'
import './App.css'
import ErrorFetch from './components/ErrorFetch'

function App() {
  const [country, setcountry] = useState()
  const [inputValue, setInputValue] = useState('')
  const [hasError, setHasError] = useState(false)

  useEffect( () => {
    axios.get(`https://restcountries.com/v3.1/name/${inputValue || 'venezuela'}`)
      .then(res => {
        setcountry(res.data[0])
        // setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
        setTimeout(() => {
          setHasError(false)
        }, 3000)
      })
  }, [inputValue])

  const handleSubmit = event => {
    event.preventDefault()
    setInputValue(event.target.input.value.trim())
    event.target.input.value = ''
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='input' type="text" />
        <button>Search Country</button>
      </form>
    {
      hasError
      ? <ErrorFetch />
      : <CardCountry country={country} />
    }

    </div>
  )
}

export default App
