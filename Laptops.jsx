import { useEffect, useState } from "react";
import axios from "axios";
import "./laptops.css";

const Laptops = () => {
  let [laptop, setLaptop] = useState([]);

  let laptops = async () => {
    let res = await axios.get("http://localhost:9000/laptops");
    console.log(res.data);
    setLaptop(res.data);
  };

  useEffect(() => {
    laptops();
  }, []);

  return (
    <div>
      {laptop.map((value, index) => {
        return (
          <div id="parent" key={index}>
            <img src={value.pimage} />
            <h3>{value.pname}</h3>
            <h3>{value.pcost}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Laptops;
