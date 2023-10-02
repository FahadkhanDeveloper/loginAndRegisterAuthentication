
import React,{useEffect,useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "react-notifications/lib/notifications.css";
import {NotificationManager} from 'react-notifications';

const Product = () => {
       const params = useParams();
       const [product, setProduct] = useState();
       const navigate = useNavigate();
      //  console.log(params);
      useEffect(() => {
        const token = localStorage.getItem("token"); 
        if(!token) return  NotificationManager.error("You need to login first", "",3000);

        axios.get("http://localhost:3001/api/product?pid="+params.id, {
          headers: {
            token: token
          }
        })
        .then(res => {
          // console.log(res)
          setProduct(res.data)
        })
        .catch(err => {
         console.log(err)
        })
      }, [])
  return (
    <div>
     
     {product && 
        <div>
          <p>ID :  {product.id}</p>
          <p>Title:  {product.title}</p>
          <p>Description:  {product.description}</p>
          <p>Category:   {product.category}</p>
          <p>Rate:   {product.rating && product.rating.rate}</p>
          <p>Price:   {product.price}</p>
          <p><img src={product.image} width="200" height="200" alt="Product Image" /></p>
          <button className="btn btn-lg btn-dark" onClick={() => navigate("/products")}>Back</button>
        </div>
      }
    </div>
  )
}

export default Product


