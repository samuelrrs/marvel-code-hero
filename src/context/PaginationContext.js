import md5 from "md5";
import React, { createContext, useContext, useState } from "react";

export const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState(0);

  const publicKey = "a56b6486e5d190a8486613dc9ea4deb7";

  const time = Number(new Date());

  const privateKey = "f7681af444c4a27b4a29b666deac976d5303d668";

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
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function PageData() {
  const context = useContext(PageContext);
  const { page, setPage, publicKey, time, privateKey, hash } = context;
  return { page, setPage, publicKey, time, privateKey, hash };
}
