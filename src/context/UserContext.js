import React, {useState, createContext} from 'react';

// when we want to use categories we import categorie context
// categorie provdider provides to other childern

export const UserContext = createContext();

export function UserProvider({children}) {
  const [user, setUser] = useState({
      name: 'ebuka',
      age: '21',
  });

  return (
    <UserContext.Provider value="helfdfdfdslo">
      {/* children is the component that is wrapped in the provider */}
      {children}
    </UserContext.Provider>
  );
}
