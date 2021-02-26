import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState(initialValues);
  const [error, setError] = useState('')

  const history = useHistory()

  const handleChanges = event => {
    setUser({...user, [event.target.name]
      : event.target.value})
  }
  const login = event => {
    event.preventDefault();
    axios
    .post('http://localhost:5000/api/login', user)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.payload)
      history.push('/bubbles')

    })
    .catch(err => {
      setError(err.message)
      console.log(err)
    })
  }
  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
        <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label>Username: 
          <input
            id='username'
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChanges}
            value={user.username}
          />
        </label>
      <br></br>
        <label>Password:
          <input
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChanges}
            value={user.password}
            />
      </label>
      <div>{error ? <p>Username or Password not valid</p> : ''}</div>

      <button>Login</button>
      </form>
    </div>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.