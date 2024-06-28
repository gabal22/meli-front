import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { Detail } from './pages/Detail'
import { Layout } from './Layout'

import './styles/styles.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/items' element={<Results />} />
          <Route path='/items/:id' element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
