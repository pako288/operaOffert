import React from "react";
import { useState } from "react";

const url = `https://www.proxypanel.io/dashboard/`;

const redireccion = url;

const ValueOption = ({title}) => {
  const [valores, setValores] = useState(2);

  const bajada = setTimeout(() => {
    setValores(valores - 1);
  }, 1000);

  if (valores === 0) {
    clearTimeout(bajada);

    console.log(`a`);
  }

  const DetectarValor = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h1
        style={{
          color: valores === 0 ? `#4479a7` : `white`,
        }}
      >
        {valores}
      </h1>
      <p>{title}</p>
      <select className="selector" name="" id="" onChange={DetectarValor}>
        <option value="1 pieza">1 pieza</option>
        <option value="2 piezas">2 pieza</option>
      </select>
    </div>
  );
};

export default ValueOption;
