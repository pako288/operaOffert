import React from "react";
import { useState, useEffect } from "react";
import Coinmarketcap from "./Coinmarketcap.js";

const BtnApi = () => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false)

  const PedirUsers = () =>{
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((resp) => resp.json())
    .then((data) => setdata(data));
    setLoading(false)

    console.log(data)
}

  useEffect(() => {

  
   Coinmarketcap()

   
  }, []);

  return (
    <>

    
      <button onClick={PedirUsers}>Hazme click</button>
      {/* <h1>{precio}</h1>  */}
      {datas?.map(el => <h1 key={el}>{el}</h1>)}
      {loading && <h1>Cargando</h1>}
     {data?.map(user => <p key={user.id}>{user.name}</p>)}
    </>
  );
};

export default BtnApi;
