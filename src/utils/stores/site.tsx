import React, { createContext, useState } from 'react';

const useValue = () => {
  const [theme, setTheme] = useState<string>('default');

  return {
    state: {
      theme
    },
    dispatch: {
      setTheme
    }
  };
};

export const SiteContext = createContext({} as ReturnType<typeof useValue>);

interface PropsSiteStore {
  children: React.ReactNode;
}

export const SiteStore = (props: PropsSiteStore) => {
  return (
    <SiteContext.Provider value={useValue()}>
      {props.children}
    </SiteContext.Provider>
  );
};
