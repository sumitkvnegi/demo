import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Stories from './component/Stories.jsx'
import Works from './component/Works.jsx'
import Contacts from './component/Contacts.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Stories/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </Router>
  )
}

export default App;

