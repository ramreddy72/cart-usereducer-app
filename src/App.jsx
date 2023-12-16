import CartContainer from './CartContainer'
import { useGlobalContext } from './GlobalContext'
import Navbar from './Navbar'

const App = () => {
  const { isLoading } = useGlobalContext()
  if (isLoading) {
    return <div className="loading"></div>
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
