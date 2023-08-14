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
      const detectValue = valuer.slice(-32);
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

  const enlace = `https://www.opera.com/computer/thanks?ni=eapgx&os=windows&edition=std-1&utm_source=PWNgames&utm_medium=pa&utm_campaign=PWN_US&utm_content=1034_70d8af6405b320cdf786607dc02087c4&utm_id=f9e376542be442d787b966ec019fd7f5`

  console.log(enlace.slice(-35))
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
