import React from "react";
import { useState } from "react";
import metamask from "./img/metamask.png";
import paginajump from "./img/pagjump.png";
import jumptoken from "./img/tokenjump.jpg";

const CardImg = () => {

    const handleClickMetamask = () => {
        navigator.clipboard.writeText(`https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es`)
    }
     const handleClickTokenCelo = () => {
        navigator.clipboard.writeText(`0x1d18d0386f51ab03e7e84e71bda1681eba865f1f`)
    }
    const handleClickPagJumpt = () => {
        navigator.clipboard.writeText(`https://www.jumptask.io/r/jigatokucale`)
    }
  return (
    <article className="card-box">
      <section className="shortcurts" onClick={handleClickMetamask}>
        <h2>Link Metamask Extension</h2>
        <figure >
          <img src={metamask} alt="" />
        </figure>
      </section>
      <section className="shortcurts" onClick={handleClickPagJumpt}>
        <h2>Jumptask Pagina</h2>
        <figure >
          <img src={paginajump} alt="" />
        </figure>
      </section>
      <section className="shortcurts" onClick={handleClickTokenCelo}>
        <h2>Token JMPT red CELO</h2>
        <figure >
          <img src={jumptoken} alt="" />
        </figure>
      </section>
    </article>
  );
};

export default CardImg;
