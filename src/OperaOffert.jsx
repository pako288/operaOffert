import React from "react";
import { useState } from "react";

const OperaOffert = () => {
  const [ValueInput, setValueInput] = useState(``);
  const [WriteSuccess, setWriteSuccess] = useState(false);
  const [Error, setError] = useState(false);

  const handleValue = (e) => {
    const valuer = e.target.value;

    if (!valuer.startsWith(`https://www.opera.com`)) {
      setWriteSuccess(false);
      //   console.log(`amarillo`);
    } else {
      const detectValue = valuer.slice(-46, -14);
      //   console.log(detectValue);
      setWriteSuccess(true);
      setValueInput(`https://www.opera.com/client/welcome-gx?utm_campaingn=PWN_US_via_opera_com_https 
        &utm_conetent=266_84660027768&utm_id=${detectValue}&ut 
        m_lastpage=opera.com/&utm_medium=pa&utm_site=opera_com&utm_source=PWNgames 
        _via_opera_com&utm_tryagain=yes
        `);

      // setValueInput(``)
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${ValueInput}`);

    console.log(`click`);
  };
  return (
    <>
      <input
        className="inputOpera"
        placeholder="https://www.opera.com"
        type="text"
        name=""
        id=""
        onChange={handleValue}
      />

      {WriteSuccess && (
        <h3 className="h1" onClick={handleCopyLink}>
          {ValueInput}
        </h3>
      )}
    </>
  );
};

export default OperaOffert;
