import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header__container">
      <img
        src="https://www.objective.com.br/wp-content/uploads/2020/11/logo.svg"
        alt="logo"
      />
      <div className="header__owner_name">
        <div className="header__owner_info">
          <p>Samuel Ribeiro</p>
          <p>Teste Front-end</p>
        </div>

        <p className="header__owner_mini">CB</p>
      </div>
    </div>
  );
};

export default Header;
