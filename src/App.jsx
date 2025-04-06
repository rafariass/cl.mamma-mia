import { useContext, useEffect } from 'react'
import { MammaMiaContext } from './contexts/MammaMiaContext'
import RoutesApp from './routes/RoutesApp'

const App = () => {
  const { verifyState } = useContext(MammaMiaContext)

  useEffect(() => { verifyState() }, [])

  return (<RoutesApp />)
}

export default App
