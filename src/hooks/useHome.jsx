import React from "react";
import '../css/home.css';
import ButtonMais from "./useButton";

export default function Home(){
    return(
        <div className='container'>
            <div className="info">
                <div className="banner">
                    <img src="./imagens/banner2.png"/>
                </div>
                <span className="separacao"></span>
                <div className="infoCards">
                    <h1>Stream de música geek</h1>
                    <p>Músicas do universo geek utilizando API do spotify</p>
                    <ButtonMais />
                </div>
            </div>
        </div>
    );
}