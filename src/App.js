import React, { useEffect, useState } from "react";
import './styles/App.css'
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";



function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      setIsLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
 
  )
}

export default App;


// React Hooks
// useState() control state
// useEffect()
// useRef()
// useMemo(callback, deps)
// useCallback()
// useContext()