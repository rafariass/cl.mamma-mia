import { delay, http, HttpResponse } from 'msw'
import { ENDPOINTS } from '../../../../src/config/constants'
import pizzas from '../../data/pizzas.json'

const products = http.get(ENDPOINTS.PRODUCTS, async () => {
  delay(200)

  return HttpResponse.json(pizzas, { status: 200 })
})

const product = http.get(`${ENDPOINTS.PRODUCTS}/:id`, async ({ params }) => {
  delay(200)
  const { id = '' } = params

  const pizza = pizzas.find((pizza) => pizza.id === id)
  if (pizza === undefined) {
    return HttpResponse.json({ message: 'Pizza not found' }, { status: 404 })
  }

  return HttpResponse.json(pizza, { status: 200 })
})

export default [products, product]
