import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const CharList = ({ char, error }) => {
  let history = useHistory();


  return (
    <div className="charList__container_superior">
      {error ? <h1>Algo deu errado...</h1> : null}
      {char.length || error === true ? "" : <h1>CARREGANDO...</h1>}
      <table className="charList__container">
        <thead>
          {char.length || error === true ? null : (
            <tr>
              <th>Personagens</th>
              <th className="charList__title_info">Séries</th>
              <th className="charList__title_info">Eventos</th>
            </tr>
          )}
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
                      return <p key={serie.name}>{serie.name}</p>;
                    })}
                  </td>
                  <td className="charList__char_info">
                    {character.events.items.slice(0, 3).map((event) => {
                      return <p key={event.name}>{event.name}</p>;
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
