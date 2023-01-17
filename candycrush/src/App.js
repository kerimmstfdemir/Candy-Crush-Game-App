import { useState } from 'react';
import './App.css';
import { UserContext } from './context/context';
import AppRouter from './router/AppRouter';

function App() {

  const [ userInfos, setUserInfos ] = useState({
    username : "",
    score:0
  })

  return (
    <UserContext.Provider value={{ userInfos, setUserInfos }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;