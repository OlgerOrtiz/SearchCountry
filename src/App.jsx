import axios from "axios";
import { useEffect, useState } from "react";
import CardCountry from "./components/CardCountry";
import "./App.css";
import ErrorFetch from "./components/ErrorFetch";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import 'boxicons'

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
    <article className="App">
      <div className="App__navBar">
        <NavBar countryNames={countryNames} handleSearch={handleSearch}/>
      </div>
      <div className="App__Map"></div>
      {
        hasError
          ? <ErrorFetch />
          : <CardCountry country={country} />
      }
    </article>
  );
}

export default App;