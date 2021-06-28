import React from "react";
import { PageData } from "../../context/PaginationContext";
import "./styles.scss";

const Footer = () => {
  const { page, setPage, limit, hero } = PageData();
  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  const current = page ? page / limit + 1 : 1;
  const pages = Math.ceil(hero / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setPage((page - 1) * limit);
    console.log(page);
  }

  return (
    <div className="footer__container">
      <ul className="pagination">
        <li>
          <button
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={page === current ? "pagination__item--active" : null}
              >
                {page}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            Próxima
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
