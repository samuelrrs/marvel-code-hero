import React, { createContext, useContext, useState } from "react";
import md5 from "md5";

export const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState(0);
  const [char, setChar] = useState([]);

  const publicKey = "a56b6486e5d190a8486613dc9ea4deb7";
  const time = Number(new Date());
  const privateKey = "f7681af444c4a27b4a29b666deac976d5303d668";
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
  };
}
