import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageData } from "../../context/PaginationContext";
import api from "../../services/api";
import "./styles.scss";

const HeroDetails = () => {
  const [hero, setHero] = useState("");
  const [comic, setComic] = useState([]);

  const { publicKey, hash, time } = PageData();
  const heroId = window.location.pathname.replace("/characters", "");
  let history = useHistory();

  useEffect(() => {
    const loadHero = async () => {
      const data = await axios.get(
        `${api}characters${heroId}?&ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      setHero(data.data.data.results[0]);
    };
    loadHero();
  }, [publicKey, hash, time, heroId]);
  useEffect(() => {
    const loadComicHero = async () => {
      const dataComic = await axios.get(
        `${api}characters${heroId}/comics?&ts=${time}&apikey=${publicKey}&hash=${hash}`
      );

      setComic(dataComic.data.data.results);
    };
    loadComicHero();
  }, [publicKey, hash, time, heroId]);

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="hero_details__container">
      <h1>{hero.name}</h1>
      <img
        src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
        alt="heroLogo"
        className="hero_details__img_hero"
      />
      <p>
        {hero.description === ""
          ? "Ops, não há descrição, Thanos passou por aqui..."
          : hero.description}
      </p>

      {hero?.comics?.items?.length > 1 ? (
        <h3>Alguns quadrinhos em que esse personagem aparece : </h3>
      ) : (
        <h3>Ops, sem quadrinhos para mostrar</h3>
      )}
      <ul>
        {console.log("QUADRIN", comic)}
        {comic?.slice(0, 5).map((item) => {
          return (
            <li>
              <div className="hero_details__comic_details">
                {item.title}
                <img
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt="ComicImg"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={goHome}>Voltar</button>
    </div>
  );
};

export default HeroDetails;