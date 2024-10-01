import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

export default function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Page for Login</h1>
      <form onSubmit={login} name='7'>
        <MyInput type='text' placeholder='Login'/>
        <MyInput type='password' placeholder='Password'/>
        <MyButton>Enter</MyButton>
      </form>
    </div>
  )
}
