import { delay, http, HttpResponse } from 'msw'
import { ENDPOINTS } from '../../../../src/config/constants'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IlVZel8yVnk5ck53N3VFTFE3QVo4RCIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQzMjAyOTc1fQ.hdlUAGOUFMYBhSWgoXJ0eK5RI244h_PIyn_JXHzo_Vg'

const checkouts = http.post(ENDPOINTS.CHECKOUTS, async ({ request }) => {
  await delay(200)
  const cart = await request.json()
  const authHeader = request.headers.get('authorization')
  const [, jwt] = authHeader?.split(' ')

  if (jwt.trim() === '') {
    return HttpResponse.json({ error: 'No token provided' }, { status: 401 })
  }

  if (jwt !== token) {
    return HttpResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  return HttpResponse.json(
    { message: 'Checkout successful', cart, user: 'test@test.com' },
    { status: 200 }
  )
})

export default [checkouts]
