import axios from "axios";
import { useEffect, useState } from "react";
import CardCountry from "./components/CardCountry";
import "./App.css";
import ErrorFetch from "./components/ErrorFetch";
import Loading from "./components/Loading";

function App() {
  const [country, setcountry] = useState();
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${inputValue || "venezuela"}`)
      .then((res) => {
        setcountry(res.data[0]);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
        setTimeout(() => {
          setHasError(false);
        }, 3000);
      });
  }, [inputValue]);

  const handleSearch = (event) => {
    event.preventDefault();
    setInputValue(event.target.input.value.trim());
    event.target.input.value = ''
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountryNames(res.data.map((data) => data.name.common));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input
          id="input"
          type="text"
          placeholder=" Search Country"
          autoComplete="off"
          list="countries"
        />
        <datalist id="countries">
          {countryNames.map((name, index) => (
            <option key={index} value={name} />
          ))}
        </datalist>
        <button className="App__btn--search">Search</button>
      </form>
      <div className="App__background--map"></div>
      {hasError ? <ErrorFetch /> : <CardCountry country={country} />}
      {country ? <Loading /> : null}
    </div>
  );
}

export default App;