
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./watches.css"

const Watches = () => {
    let [watch , setWatch] = useState([])

    let watches = async() => {
       let res = await axios.get("http://localhost:9000/watches")
       console.log(res.data);
       setWatch(res.data)
    }

    useEffect(() => {
        watches()
    },[])

  return (
    <div>
        {
            watch.map((value , index) => {
             return(<div id='parent' key={index}>
                      <img src={value.pimage} />
                      <h3>{value.pname}</h3>
                      <h3>{value.pcost}</h3>
                   </div>
             )
            })
        }
    </div>
  )
}

export default Watches