import { createContext, useState } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {

  const [ userInfos, setUserInfos ] = useState({
    username : "",
    score:0
  })

  //? Creating Context
  const UserContext = createContext();

  return (
    <UserContext.Provider value={{ userInfos, setUserInfos }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
