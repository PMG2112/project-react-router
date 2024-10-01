import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';



export default function AppRouter() {
  const {isAuth,isLoading} = useContext(AuthContext);
  // console.log(isAuth);
  
  const privateRoute = useRoutes([
    {
        path: "about", element: <About/>,
    },
    {
        path: "posts", element: <Posts/>,
    },
    {
        path:"posts/:id", element: <PostIdPage/>,
    },
    {
      path:"/", element: <Posts/>,
    },
    {
      path:"*", element: <Posts/>,
    },
]);

const publicRoutes = useRoutes([
  {
      path: "login", element: <Login/>,
  },
  {
    path: "error", element: <Error/>,
  },

]);

if(isLoading) {
  return <Loader/>
}

  return (
    isAuth 
      ? <> {privateRoute} </> 
      : <> 
        {publicRoutes} 
        <Navigate to="login" />
      </>
 )
}
