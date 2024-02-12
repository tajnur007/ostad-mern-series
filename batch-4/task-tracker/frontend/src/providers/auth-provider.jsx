import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;