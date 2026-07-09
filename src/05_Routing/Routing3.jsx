import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar'
import DashBoard from './DashBoard'
import ProtectedRoute from './ProtectedRouter'

const Routing3 = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <DashBoard />
      </ProtectedRoute>
    }
  />
   </Routes>
   </BrowserRouter>
  )
}

export default Routing3