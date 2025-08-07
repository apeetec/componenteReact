import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// Criei esse PopUp seguindo esse código de referência https://codepen.io/artisticMK/pen/JjZxXxM
const Popup = () => {

var authAnimation
  

const openAuthModal = () => {
    authAnimation = gsap.timeline({ defaults: { ease: "power2.inOut" }})
    .to("#authOverlay", {scaleY: 0.01, x: 1, opacity: 1, display: "flex", duration: 0.4})
    .to("#authOverlay", {scaleY: 1, background: "rgba(255,255,255,0.16)", duration: 0.6})
    .to("#authOverlay #second", {scaleY: 1, opacity: 1, duration: 0.6}, "-=0.4")
    .to("#authOverlay #third", {scaleY: 1, opacity: 1, duration: 0.4}, "-=0.2")
    .to("#authOverlay #fourth", {background: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.3)", duration: 0.8}, "-=0.4")
};
const closeAuthModal = () => {
  authAnimation.reverse().timeScale(-1.6);
};

return (
<>
<button onClick={openAuthModal} className="btn-large"><img src="./img/chat.svg" alt="" />Chat</button>
<div id="authOverlay" className="fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm scale-y-0 -translate-x-full opacity-0 origin-center">
  <div id="fourth" className="bg-white/0 max-w-sm m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm">
    <div id="second" className="bg-white p-4 sm:p-8 w-full rounded-xl shadow-sm scale-y-0 opacity-0">            
      <div id="third" className="relative scale-y-0 opacity-0">
        <h1 className="text-cyan-400 text-3xl font-bold mb-4 text-center">
            Olá, 
        </h1>
        <p>
          meu nome é Gabriel, acesse os links abaixo para mais informações
        </p>
        <div className="linktree">
          <a className="btn-large" href="https://www.linkedin.com/in/gabrielbdeveloper/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn-large" href="https://github.com/apeetec" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="btn-large" href="https://codepen.io/bieelkhalifa" target="_blank" rel="noopener noreferrer">Codepen</a>
          <a download="" className="btn-large cv" href="./Currículo.docx" target="_blank" rel="noopener noreferrer">Currículo</a>
        </div>

        <div className="text-center">
            <button onClick={closeAuthModal} className="bg-neutral-100 text-neutral-400 font-semibold text-xl rounded-md border-b-[3px] px-3 py-1">Close</button>
        </div>       
      </div>
    </div>
  </div>
</div>
</>

);

};

export default Popup;
