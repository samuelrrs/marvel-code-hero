import axios from "axios";
import { useState, useEffect } from "react";
import CharList from "../../components/CharList";
import "./styles.scss";
import { PageData } from "../../context/PaginationContext";
import api from "../../services/api";

const SearchPage = () => {
  const [char, setChar] = useState([]);
  const [value, setValue] = useState("");
  const { page, publicKey, time, hash } = PageData();

  useEffect(() => {
    const load = async () => {
      if (value === "") {
        const data = await axios.get(
          `${api}characters?&limit=10&offset=${page}&ts=${time}&apikey=${publicKey}&hash=${hash}`
        );
        setChar(data.data.data.results);
      }
      if (value.length >= 3) {
        const data = await axios.get(
          `${api}characters?nameStartsWith=${value}&ts=${time}&apikey=${publicKey}&hash=${hash}`
        );
        setChar(data.data.data.results);
      }
    };
    load();
  }, [value, page, publicKey, time, hash]);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
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
      <CharList char={char} />
    </div>
  );
};

export default SearchPage;
