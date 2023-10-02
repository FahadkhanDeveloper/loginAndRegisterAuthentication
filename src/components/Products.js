import React, {useEffect, useState} from 'react'
import "react-notifications/lib/notifications.css";
import {NotificationManager} from 'react-notifications';
import {Link} from 'react-router-dom';

import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token"); 
      if(!token) return  NotificationManager.error("You need to login first", "",3000);


    axios.get("http://localhost:3001/api/products", {
      headers: {
        token: token
      }
    })
    .then((res) => {
      //  console.log(res)
      setProducts(res.data)
    })
    .catch(err => {
      // console.log(err)
      NotificationManager.error("You need to login first", "",3000);
    })
  },[products])
  return (
    // <div>
    //   {products.length > 0 && products.map(prod => {
    //     return (<tr>
    //       <td>{prod.title}</td>
    //       <td>{prod.price}</td>
    //     </tr>)
    //   })}
    // </div>
    <div>
      {
        products.length > 0 && products.map(prod => {
          return (
            <div>
              {/* we define it "/product/:id"  in app.js therefore we cannot use ? */}
              <Link to={"/product/" + prod.id}> 
              {prod.title}
              </Link>
              {/* same as above */}
              {/* <Link to={"/product?pid=" + prod.id}>{prod.title}</Link> */}
            </div>
          )
        })
      }
    </div>
  )
}

export default Products