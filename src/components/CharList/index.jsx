import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const CharList = ({ char }) => {
  let history = useHistory();

  return (
    <div className="charList__container_superior">
      {char.length ? "" : <h1>CARREGANDO...</h1>}
      <table className="charList__container">
        <thead>
          <tr>
            <th>Personagens</th>
            <th className="charList__title_info">Séries</th>
            <th className="charList__title_info">Eventos</th>
          </tr>
        </thead>
        <tbody>
          {char.map((character) => {
            const sendToDetails = () => {
              history.push(`/characters/${character.id}`);
            };
            return (
              <>
                <tr
                  className="charList__item-list"
                  key={character.id}
                  onClick={sendToDetails}
                >
                  <td className="charList__item_content">
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt="CharacterPhoto"
                    />
                    <p>{character.name}</p>
                  </td>
                  <td className="charList__char_info">
                    {character.series.items.slice(0, 3).map((serie) => {
                      return <p>{serie.name}</p>;
                    })}
                  </td>
                  <td className="charList__char_info">
                    {character.events.items.slice(0, 3).map((event) => {
                      return <p>{event.name}</p>;
                    })}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CharList;
