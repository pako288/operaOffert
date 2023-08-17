import React from "react";
import { useState } from "react";

const Proxy = () => {
  const [avisoCopy, setavisoCopy] = useState(false);

  const handleIP = () => {
    setavisoCopy(true);
    navigator.clipboard.writeText(`209.248.90.29:8083`);
  };
  const handleUsername = () => {
    navigator.clipboard.writeText(`Krehisly20.17`);
  };
  const handlePassword = () => {
    navigator.clipboard.writeText(`rache1234`);
  };
  const handleUsernameTwo = () => {
    navigator.clipboard.writeText(`crismar95.custom2`);
  };
  const handlePasswordTwo = () => {
    navigator.clipboard.writeText(`pakolo21`);
  };

  const changeIP = () => {
    const LinkRotar = `https://proxypanel.io/proxy/change-ip/Krehisly20/17/e839ffaf7b687127669b1d8729fb900f:86R7S026FHHi_V_xsozV49KqXDNhhy4gFXf5MbvZ9nY`;
    window.open(LinkRotar);
  };
  const changeIPTwo = () => {
    const LinkRotar = `https://proxypanel.io/proxy/change-ip/Krehisly20/17/e839ffaf7b687127669b1d8729fb900f:86R7S026FHHi_V_xsozV49KqXDNhhy4gFXf5MbvZ9nY`;
    window.open(LinkRotar);
  };
  return (
    <section className="proxy-box">
      <article className="proxy">
        <h1 className="letrasproxy">Proxy 1</h1>
        <article>
          <h2 onClick={handleIP}>Direccion IP</h2>
          <h2 onClick={handleUsername}>Username</h2>
          <h2 onClick={handlePassword}>Password</h2>
          <button onClick={changeIP}>Cambiar IP</button>
        </article>
      </article>{" "}
      <article className="proxy">
        <h1 className="letrasproxy">Proxy 2</h1>
        <article>
          <h2 onClick={handleIP}>Direccion IP</h2>
          <h2 onClick={handleUsernameTwo}>Username</h2>
          <h2 onClick={handlePasswordTwo}>Password</h2>
          <button onClick={changeIPTwo}>Cambiar IP</button>
        </article>
      </article>
    </section>
  );
};

export default Proxy;
