import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, ListGroup, Container, Button } from 'react-bootstrap'
import { MammaMiaContext } from '../../contexts/MammaMiaContext'
import { capitalize, formatMoney } from '../../utils'
import pizzaLogo from '../../assets/img/logo.png'
import arrowBack from '../../assets/img/arrow_back.png'

const Product = () => {
  const [pizza, setPizza] = useState({})
  const { id } = useParams()
  const { addProductCart, getProduct } = useContext(MammaMiaContext)

  const navigate = useNavigate()

  const getPizza = async () => {
    const pizzaProduct = await getProduct(id)
    setPizza(pizzaProduct)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <div className='d-flex align-items-center justify-content-center bg-common bg-product'>
      <Container>
        <div className='card my-5 border border-0 rounded-4 overflow-hidden'>
          <div className='row g-0'>
            <div className='col-md-5 bg-common' style={{ backgroundImage: `url(${pizza?.img})` }} />
            <div className='col-md-7'>
              <div className='card-body'>
                <div className='d-flex align-items-center justify-content-start'>
                  <button className='nav-link' onClick={() => navigate('/products')}>
                    <img src={arrowBack} alt='arrow back icon' className='icon-list back-icon me-2' />
                  </button>
                  <h5 className='card-title f-pizza p-0 m-0'>{pizza?.name && capitalize(pizza?.name)}</h5>
                </div>
                <hr />
                <p className='card-text'>{pizza?.desc}</p>
                <Card.Body>
                  <Card.Text className='mb-2'>Ingredientes:</Card.Text>
                  <ListGroup variant='flush'>
                    {pizza?.ingredients?.map((ingredient, index) => (
                      <ListGroup.Item className='border-0' key={index}>
                        <img src={pizzaLogo} alt='Logo Pizza' className='d-inline-block align-top me-2 icon-list' />
                        {capitalize(ingredient)}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
                <Card.Footer className='d-flex align-items-center justify-content-between'>
                  <p className='h2 m-0'>Precio: $ {formatMoney(pizza?.price)}</p>
                  <Button variant='danger' className='px-md-5' onClick={() => addProductCart(pizza)}>
                    Añadir 🛒
                  </Button>
                </Card.Footer>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
