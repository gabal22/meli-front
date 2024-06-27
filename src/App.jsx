import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { Detail } from './pages/Detail'
import { Header } from './components/Header'

import './styles/styles.scss'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/items' element={<Results />} />
        <Route path='/items/:id' element={<Detail />} />

      </Routes>
    </Router>
  )
}

export default App
