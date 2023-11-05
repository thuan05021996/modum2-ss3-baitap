import { useState } from 'react'
import Bai1 from './component/bai1/Bai1'
import Bai2 from './component/bai2/Bai2'
import Bai3 from './component/bai3/Bai3'
import Bai4 from './component/bai4/Bai4'
import Bai5 from './component/bai5/Bai5'
import Bai6 from './component/bai6/Bai6'
import Bai7 from './component/bai7/Bai7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Bai1></Bai1> */}
   {/*   <Bai2></Bai2> */}
   {/* <Bai3></Bai3> */}
   {/* <Bai4></Bai4> */}
  {/*  <Bai5></Bai5> */}
  {/* <Bai6></Bai6> */}
  <Bai7></Bai7>
    </>
  )
}

export default App
