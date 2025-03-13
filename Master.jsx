import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error'
import Mobiles from './Mobiles'
import Laptops from './Laptops'
import Watches from './Watches'
// import Electronics from './Electronics'
const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}>
               <Route path='/dashboard/mobiles' element={<Mobiles></Mobiles>}></Route>
               <Route path='/dashboard/laptops' element={<Laptops></Laptops>}></Route>
               {/* <Route path='dashboard/electronics' element={<Electronics></Electronics>}></Route> */}
               <Route path='/dashboard/watches' element={<Watches></Watches>}></Route>
            </Route>
            <Route path='/error' element={<Error></Error>}></Route>
        </Routes>
    </div>
  )
}

export default Master