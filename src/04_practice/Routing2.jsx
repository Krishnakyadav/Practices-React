import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContextData from './ContextData'
import Login2 from './Login2'
import ControllerForm from './ControllerForm'

const Routing2 = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ContextData/>}/>
    <Route path='/login' element={<Login2/>}/>
    <Route path="*" element={<h2>404 page Not Found</h2>}/>
   </Routes>
   </BrowserRouter>
  )
}
// 
export default Routing2