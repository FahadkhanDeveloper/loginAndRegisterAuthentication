import React, { useState } from 'react'
import axios from 'axios';
import "react-notifications/lib/notifications.css";
import {NotificationManager} from 'react-notifications';

// it is hook used for navigation
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); 

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/user/login", {
        email: email,
        password: password
    }).then(res => {
      // console.log(res)
      // console.log(res.headers.token)
      localStorage.setItem("token",res.headers.token);
       NotificationManager.success("Successfully Logged in!!!","",3000);
       navigate("/home")

    }).catch(err => {
       console.log(err)
    })
  }
  return (
    <div className='container'>
        <div className='Auth-form-container'> 
          <form className="Auth-form" onSubmit={(e) => login(e)}>
            <div className='Auth-form-content'>
            <h3 className='Auth-form-title'>Login</h3>

            <div className='form-group mt-3'>
              <label>Email address</label>
              <input 
                 type="email"
                 className='form-control mt-1'
                 placeholder="Email Address"
                 onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                 type="password"
                 className="form-control mt -1"
                 placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)}
                value={password}
               />
            </div> 


            <div className='d-grid gap-2 mt-3'>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            </div> 
          </form>
        </div>
     </div>
  )
}

export default Login