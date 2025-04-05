import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { MammaMiaContext } from '../contexts/MammaMiaContext'
import pizzaLogo from '../assets/img/logo.png'

const Navigation = () => {
  const { logOut, totalPizzaCart, user } = useContext(MammaMiaContext)

  const isActive = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  const isUserValidate = () => {
    if (user === null) {
      return (
        <>
          <NavLink to='/register' className={isActive}>Register</NavLink>
          <NavLink to='/login' className={isActive}>LogIn</NavLink>
        </>
      )
    }

    return (
      <>
        <NavLink to='/products' className={isActive}>Products</NavLink>
        <NavLink to='/profile' className={isActive}>Profile</NavLink>
        <NavLink to='/cart' className={isActive}>Cart $ {totalPizzaCart()}</NavLink>
        <button className='nav-link text-start' onClick={logOut}>LogOut</button>
      </>
    )
  }

  return (
    <Navbar expand='lg' bg='danger' data-bs-theme='dark' className='area-menu sticky-top'>
      <Container>
        <Navbar.Brand>
          <NavLink to='/' className={isActive}>
            <img
              src={pizzaLogo}
              width='32'
              height='32'
              className='d-inline-block align-top pe-2'
              alt='Logo Pizzeráa Mamma Mía'
            />
            <span className='f-pizza' style={{ fontSize: '25px' }}>Pizzería Mamma Mía!</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='ms-auto'>
            {isUserValidate()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
