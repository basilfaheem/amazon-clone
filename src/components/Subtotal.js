import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'
import {getBasketTotal} from "../reducer"
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();
    return (
       
        <div className="subtotal">

            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
            />
            <button onClick={e=>user? history.push("/payment"):history.push("/login")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal




