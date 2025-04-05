import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { MammaMiaContext } from '../contexts/MammaMiaContext'
import { formatMoney } from '../utils/formatMoney'

const CardProduct = ({ pizza }) => {
  const { addProductCart } = useContext(MammaMiaContext)
  const navigate = useNavigate()

  const { id, img, name, ingredients, price } = pizza

  return (
    <Card>
      <div className='bg-common bg-card overflow-hidden'>
        <Card.Img variant='top' src={img} alt={`Img Pizza: ${name}`} loading='lazy' className='pizza-img' />
      </div>
      <Card.Body>
        <Card.Title className='card-title f-pizza'>{name}</Card.Title>
        <Card.Text>
          Ingredientes:
        </Card.Text>
        <ul>
          {ingredients?.map((ingredient) => (
            <li key={`${id}${ingredient}`}>{ingredient}</li>
          ))}
        </ul>
        <Card.Footer>
          <p className='card-price'>$ {formatMoney(price)}</p>
          <div className='card-btns'>
            <Button variant='success' className='w-50' onClick={() => navigate(`/products/${id}`)}>
              Ver Más 👀
            </Button>
            <Button variant='danger' className='w-50' onClick={() => addProductCart(pizza)}>
              Añadir 🛒
            </Button>
          </div>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default CardProduct
