
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./mobiles.css"

const Mobiles = () => {
    let [mobile , setMobile] = useState([])

    let mobiles = async() => {
       let res = await axios.get("http://localhost:9000/mobiles")
       console.log(res.data);
       setMobile(res.data)
    }

    useEffect(() => {
        mobiles()
    },[])

  return (
    <div>
        {
            mobile.map((value , index) => {
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

export default Mobiles