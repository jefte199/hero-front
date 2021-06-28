import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext({});

const ItemsProvider = ({ children }) => {

  const [items, setItems] = useState([]);

  return (
    <CountContext.Provider
      value={{
        items, setItems
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export function useItems() {
  const { items, setItems } = useContext(CountContext);

  return { items, setItems }
};

export default ItemsProvider;