import React from 'react'
import "./Product.css"
import {useStateValue} from "../StateProvider"
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Product({id,title,price,rating, image}) {
    const [{basket},dispatch] = useStateValue();

    // console.log("THIS IS THE BASKET >>>>", basket)

        const addToBasket=()=>{
            dispatch({
                type:"ADD_TO_BASKET",
                item:{
                    id:id,
                    title:title,
                    price:price,
                    image:image,
                    rating:rating,
                }
            })
                
        }


    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))}
            
            </div>
            </div>
            <img src={image}/>
           
            <button
             onClick={(event) => { addToBasket(event);
              toast( title + " Added to Cart Successfully.",
              {type:"dark"});
              
              }}>
              Add to Basket
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                
                />
        </div>
    )
}

export default Product
