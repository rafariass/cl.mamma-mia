import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AreaWork } from '../../../components'
import { MammaMiaContext } from '../../../contexts/MammaMiaContext'

const Login = () => {
  const { logIn } = useContext(MammaMiaContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    logIn(data)
  }

  return (
    <AreaWork bg='bg-common bg-login'>
      <Form className='bg-white p-5' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' name='email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' name='password' />
        </Form.Group>
        <Button className='w-100' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </AreaWork>
  )
}

export default Login
