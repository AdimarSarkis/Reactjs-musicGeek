import React from "react";
import '../css/cards.css';

export default function Cards({
    autor,
    nomeMusica,
    imgMusica
}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={imgMusica} />
            </div>
            <div className="card-info">
                <div className="card-text">
                    <p className="text-title">{autor}</p>
                    <p className="text-subtitle">{nomeMusica}</p>
                </div>
                <div className="card-icon">
                  <svg viewBox="0 0 28 25">
                    <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                  </svg>
                </div>
            </div>
        </div>
    );
}