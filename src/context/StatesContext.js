import React, { createContext, useContext, useState } from "react";
import md5 from "md5";

export const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState(0);
  const [char, setChar] = useState([]);
  const [hero, setHero] = useState([]);

  const publicKey = "2b3bed7c930a0e1e4848a53bf0d944f0";
  const time = Number(new Date());
  const privateKey = "79a6238f4eb2098ffaabacf2d0b3e847e931936b";
  const limit = 10;
  const hash = md5(time + privateKey + publicKey);

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        publicKey,
        time,
        privateKey,
        hash,
        limit,
        char,
        setChar,
        hero,
        setHero,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function PageData() {
  const context = useContext(PageContext);
  const {
    page,
    setPage,
    publicKey,
    time,
    privateKey,
    hash,
    limit,
    char,
    setChar,
    hero,
    setHero,
  } = context;
  return {
    page,
    setPage,
    publicKey,
    time,
    privateKey,
    hash,
    limit,
    char,
    setChar,
    hero,
    setHero,
  };
}
