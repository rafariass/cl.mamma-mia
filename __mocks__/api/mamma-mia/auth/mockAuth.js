import { delay, http, HttpResponse } from 'msw'
import { ENDPOINTS } from '../../../../src/config/constants'
import { emailValidate } from '../../../../src/utils'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6IlVZel8yVnk5ck53N3VFTFE3QVo4RCIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQzMjAyOTc1fQ.hdlUAGOUFMYBhSWgoXJ0eK5RI244h_PIyn_JXHzo_Vg'

const login = http.post(ENDPOINTS.LOGIN, async ({ request }) => {
  await delay(200)
  const { email = '', password = '' } = await request.json()

  if (email.trim() === '' || password.trim() === '') {
    return HttpResponse.json({ error: 'Email and password are required' }, { status: 400 })
  }

  if (emailValidate === false) {
    return HttpResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  if (password.length < 6) {
    return HttpResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })
  }

  if (email !== 'test@test.com') {
    return HttpResponse.json({ error: 'User not found' }, { status: 400 })
  }

  if (password !== '123123') {
    return HttpResponse.json({ error: 'Invalid password' }, { status: 400 })
  }

  return HttpResponse.json({ email, token }, { status: 200 })
})

const register = http.post(ENDPOINTS.REGISTER, async ({ request }) => {
  await delay(200)
  const { email = '', password = '' } = await request.json()

  if (email.trim() === '' || password.trim() === '') {
    return HttpResponse.json({ error: 'Email and password are required' }, { status: 400 })
  }

  if (emailValidate === false) {
    return HttpResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  if (password.length < 6) {
    return HttpResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 })
  }

  if (email !== 'rfarias@desafiolatam.cl') {
    return HttpResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJmYXJpYXNAZGVzYWZpb2xhdGFtLmNsIiwiaWQiOiJSYUhuU3VoZlBHSGFRZ19ad1IxZUQiLCJpYXQiOjE3NDM5NjM2MTV9.7NEWyHVnMpbsh0ifJ_hkmXpVuYMRaiHnEz11PfKB8rM'
  return HttpResponse.json({ email, token }, { status: 200 })
})

const profile = http.get(ENDPOINTS.ME, async ({ request }) => {
  await delay(200)
  const authHeader = request.headers.get('authorization')
  const [, jwt] = authHeader?.split(' ')

  if (jwt.trim() === '') {
    return HttpResponse.json({ error: 'No token provided' }, { status: 401 })
  }

  if (jwt !== token) {
    return HttpResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  if (jwt === token) {
    return HttpResponse.json({ email: 'rfarias@desafiolatam.cl', id: 'UYz_2Vy9rNw7uELQ7AZ8D' }, { status: 200 })
  }

  return HttpResponse.json({ error: 'Server error' }, { status: 500 })
})

export default [login, register, profile]
