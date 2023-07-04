import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


const objeto = {
  nombre: `Ramon`,
  direccion: {
    zip: 4101,
    calle: 18,
  }
}

const {direccion:{zip, calle}} = objeto
console.log(zip, calle)
function App() {
  const [count, setCount] = useState(0);
  const [Cargando, setCargando] = useState(true);
  const [hora, setHora] = useState(null);

  const sumarcontador = setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  if (count >= 5) {
    clearTimeout(sumarcontador);
  }

  const contenedorTiempo = setTimeout(() => {
    // setCargando(true);
    setCargando(false);
    const contenedorIntervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString(`en-US`));
    }, 0);
  }, 2000);

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {Cargando && <h1>Cargando</h1>}
      <p className="hora">{hora}</p>
      <h1>Vite + React</h1>

      <div className="card">
        <button
          style={{
            background: count === 5 ? `red` : `yellow`,
            color: `black`,
            fontSize: `40px`,
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count} {count === 1 ? `time` : `times`}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
