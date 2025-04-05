import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import { MammaMiaContext } from '../../contexts/MammaMiaContext'
import { capitalize, formatMoney } from '../../utils'

const Cart = () => {
  const { cart, addProductCart, removeProductCart, totalPizzaCart, checkouts } = useContext(MammaMiaContext)

  return (
    <div className='d-flex align-items-center justify-content-center bg-common bg-cart'>
      <Container>
        <div className='bg-light p-3 border rounded'>
          <h5 className='m-0 pt-2 pb-4 f-pizza' style={{ fontSize: '40px' }}>Order Summary:</h5>
          <Container className='bg-white'>
            {cart.length === 0 ? <p className='pt-3'>You must add products to your cart first</p> : ''}
            <ul className='list-group list-group-flush border-bottom'>
              {cart?.map((item) => (
                <li key={item.id} className='list-group-item d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <img
                      src={item.img}
                      alt='Pizza Selected'
                      width='64'
                      height='64'
                      className='d-none d-md-inline-block align-top me-md-2'
                    />
                    <p className='m-0'>{capitalize(item.name)}</p>
                  </div>
                  <div className='d-flex align-items-center justify-content-end gap-3'>
                    <p className='m-0'>$ {formatMoney(item.price * item.cant)}</p>
                    <Button variant='danger' className='px-3' onClick={() => removeProductCart(item)}> - </Button>
                    <p className='m-0'>{item.cant}</p>
                    <Button variant='primary' className='px-3' onClick={() => addProductCart(item)}> + </Button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='d-flex align-items-center justify-content-between p-2 mt-3'>
              <h3 className='m-0'>Total: $ {totalPizzaCart()}</h3>
              <Button variant='success' onClick={() => checkouts()} className='px-5'>Go to Checkout</Button>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  )
}

export default Cart
