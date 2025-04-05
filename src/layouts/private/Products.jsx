import { useContext } from 'react'
import { CardProduct, HeroSection } from '../../components'
import { MammaMiaContext } from '../../contexts/MammaMiaContext'

import wallpaper from '../../assets/img/products.avif'

const title = '¡Pizzería Mamma Mia!'
const text = 'We have the best pizzas you can find!'

const Products = () => {
  const { pizzas } = useContext(MammaMiaContext)

  return (
    <div className='container-fluid p-0 m-0'>
      <HeroSection title={title} text={text} img={wallpaper} />
      <div className='container py-5'>
        <h1 className='text-center f-pizza mb-3' style={{ fontSize: '50px' }}>Products</h1>
        <div className='gallery-section pt-4'>
          {pizzas?.map((pizza) => (
            <CardProduct key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
