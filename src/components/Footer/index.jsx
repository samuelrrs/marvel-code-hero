import React from "react";
import { PageData } from "../../context/PaginationContext";
import "./styles.scss";

const Footer = () => {
  const { page, setPage } = PageData();

  const nextPage = () => {
    setPage(page + 10);
  };
  const backPage = () => {
    page > 0 && setPage(page - 10);
  };

  return (
    <div className="footer__container">
      {page > 0 && <button onClick={backPage}>Anterior</button>}
      <button onClick={nextPage}>Proximo</button>
    </div>
  );
};

export default Footer;
