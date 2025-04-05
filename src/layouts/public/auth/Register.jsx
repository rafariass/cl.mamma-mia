import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AreaWork } from '../../../components'
import { sweetAlert2 } from '../../../utils/sweetAlert2'
import { MammaMiaContext } from '../../../contexts/MammaMiaContext'

const Register = () => {
  const { registerUser } = useContext(MammaMiaContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    if (formData.get('password') !== formData.get('confirm_password')) {
      sweetAlert2({ text: 'Passwords do not match', icon: 'error', confirmButton: 'btn btn-danger px-5' })
      return
    }
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    registerUser(data)
  }

  return (
    <AreaWork bg='bg-common bg-register'>
      <Form className='bg-white p-5' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
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
        <Form.Group className='mb-3' controlId='formConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Password' name='confirm_password' />
        </Form.Group>
        <Button className='w-100' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </AreaWork>
  )
}

export default Register
