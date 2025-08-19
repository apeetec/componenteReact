import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Popup from '../components/Popup'; // 👈 Caminho relativo
const Card = () => {
    return (

        <>
        <div className="card-box">   
            <div className="card shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)] aqui">
                <div className="representative shadow-[0px_0px_20px_0px_rgba(0,_0,_0,_0.1)]">
                    <img src="./img/medalha.svg" alt="Medalha" />
                    <span>Representative</span>
                </div>

                <div className="content">
                    <div className="profile-picture">
                        <img src="" alt="" className="picture" />
                    </div>
                    <div className="texts">
                        <div className="single">
                        <div>
                            <h1 className="name">
                            Armless John
                            </h1>
                            <p className="position">
                            Software Developer 
                            <br />
                            GRI Institute
                            </p>
                        </div>
                        <div className="logo-container">
                            <img src="./img/0033600000DmrRO_Marketing_Edited_Logo_2025-06-14_01-23-10.jpg" alt="Logo" />
                        </div>
                        </div>
                        <div className="single">
                        <div>
                            <p className="tools">Servers, Web and Mobile</p>
                        </div>
                        <div>
                            <img className="star" src="./img/estrela.svg" alt="Medalha" />
                        </div>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="controls">
                        <div className="progress-bar">
                        <div className="bar"></div>
                        </div>
                        <div className="percent">
                        <span className="text-percent"><strong>66%</strong>&nbsp;&nbsp;Match</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <a href="" className="btn-large-border">Intro request</a>
                        <a href="" className="btn-large-border">Private Meeting</a>
                        <Popup/>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
export default Card;