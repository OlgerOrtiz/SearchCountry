import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import ErrorFetch from "./components/ErrorFetch";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import 'boxicons'
import Galery from "./components/Galery";

function App() {
  const [country, setcountry] = useState();
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [namesCountries, setNamesCountries] = useState([]);
  const [allsCountries, setAllsCountries] = useState()

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${inputValue || 'venezuela'}`)
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
        setNamesCountries(res.data.map((data) => data.name.common));
        setAllsCountries(res.data.map((data) => data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <article className="App">
      <div className="App__NavBar">
        <NavBar namesCountries={namesCountries} handleSearch={handleSearch} allsCountries={allsCountries}/>
      </div>

      <div className="App__Map">
      </div>

      <div className="App__Modal">
      {
        hasError
          ? <ErrorFetch />
          : <Modal country={country} />
      }
      </div>
      <hr />
      <div className="App__Gallery">
      <Galery namesCountries={namesCountries} allsCountries={allsCountries}/>
      </div>

    </article>
  );
}

export default App;