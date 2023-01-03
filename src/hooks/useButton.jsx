import React from "react";
import { render } from "react-dom";
import '../css/buttonMais.css'

export default function ButtonMais(){

function abrirPesquisa(){
    render(
        
    )
        
}

    return(
        <>
        <button className="learn-more" onClick={() => this.abrirPesquisa()}>
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">VER MÚSICAS</span>
        </button>
        </>
        
    );
}