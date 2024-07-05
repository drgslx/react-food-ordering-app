import React, {useContext} from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext.jsx'
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'

function Cart() {
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)
  return (
    <Modal className='cart'>
        <h2>Your cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <li key={item.id}>{item.name} - {item.quantity}</li>
            ))}
        </ul>
        <p className='cart-total'>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button textOnly> Close</Button>
            <Button>Go to checkout</Button>
        </p>
    </Modal>
  )
}

export default Cart