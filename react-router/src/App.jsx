import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  )
}

export default App