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
      // const detectValue = valuer.slice(-32);
      const detectValue = valuer.slice(-66, -34);
      //   console.log(detectValue);
      setWriteSuccess(true);
      setValueInput(`https://www.opera.com/client/welcome-gx?utm_campaingn=PWN_US_via_opera_com_https&utm_conetent=266_84660027768&utm_id=${detectValue}&utm_lastpage=opera.com/&utm_medium=pa&utm_site=opera_com&utm_source=PWNgames_via_opera_com&utm_tryagain=yes`.trim());

      // setValueInput(``)
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${ValueInput}`);

    console.log(`click`);
  };

  const enlace = `https://www.opera.com/gx?utm_content=707_8b11f122-6cf2-4cbb-b267-2b466755316f&utm_medium=pa&utm_campaign=PWN_US&utm_id=7f8c38b333a34705a2b0b6b1b5c41b2a&utm_source=PWNgames&edition=std-1`

  console.log(enlace.slice(-66, -34))
  return (
    <>
    <article className="box-input">

    <input
        className="inputOpera"
        placeholder="https://www.opera.com"
        type="text"
        name=""
        id=""
        onChange={handleValue}
      />
       
    </article>
    {WriteSuccess && (
        <h3 className="h1" onClick={handleCopyLink}>
          {ValueInput}
        </h3>
      )}
     
    </>
  );
};

export default OperaOffert;
