import axios from "axios";
import { useState, useEffect } from "react";
import CharList from "../../components/CharList";
import "./styles.scss";
import api from "../../services/api";
import { PageData } from "../../context/StatesContext";
import Footer from "../../components/Footer";

const SearchPage = () => {
  const [char, setChar] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const { page, publicKey, time, hash, limit } = PageData();

  useEffect(() => {
    const load = async () => {
      try {
        if (value === "") {
          const data = await axios.get(
            `${api}characters?&limit=${limit}&offset=${page}&ts=${time}&apikey=${publicKey}&hash=${hash}`
          );
          setChar(data.data.data.results);
        }
        if (value.length >= 3) {
          const data = await axios.get(
            `${api}characters?nameStartsWith=${value}&ts=${time}&apikey=${publicKey}&hash=${hash}`
          );
          setChar(data.data.data.results);
        }
      } catch (error) {
        setError(true);
      }
    };
    load();
  }, [value, page, publicKey, time, hash, limit]);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
      <div className="searchPage__listResults">
        <h1>Busca de personagens</h1>
        <p>Nome do personagem</p>
        <form>
          <input
            type="text"
            placeholder="Search"
            autoFocus
            value={value}
            onChange={handleChange}
          />
        </form>
        <CharList char={char} error={error} />
      </div>
      <Footer showBtn={error ? false : true} />
    </>
  );
};

export default SearchPage;
