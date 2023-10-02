import React, {useEffect} from 'react'
import "react-notifications/lib/notifications.css";
import {NotificationManager} from 'react-notifications';

import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
useEffect(() => {
  const token_original = localStorage.getItem("token");
  if(!token_original) {
    NotificationManager.error("Already logged out", "", 3000);
    // console.log("Already logged out")
    navigate("/home");
  }
  else {
      localStorage.removeItem("token")
      NotificationManager.warning("Logged out successfully", "", 3000);
      // console.log("Logged out successfully")
      navigate("/home");
  }
},[navigate])
  return (
    <div>Logout</div>
  )
}

export default Logout