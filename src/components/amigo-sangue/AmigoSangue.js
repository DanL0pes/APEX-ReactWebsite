import React from 'react';
import './AmigoSangue.css';
import { FaCheck } from "react-icons/fa";

function AmigoSangue() {

    return (
        <section className='amigo-sangue' id='projetos'>

            <div className='amigo-sangue-container'>
                <div className='amigo-sangue-projeto'>
                <div className='blob main'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#BA0000" transform="translate(100 100)">
                            <animate attributeName='d'
                                dur={"20s"}
                                repeatCount={"indefinite"}

                                values="M54,-66.5C66.7,-53.6,71.7,-33.5,74.3,-13.8C76.9,5.9,77.2,25.3,69.3,41.1C61.5,57,45.6,69.3,29.2,71.4C12.8,73.6,-4.1,65.6,-20.3,58.5C-36.4,51.4,-51.9,45.1,-60,33.5C-68.1,21.8,-68.8,4.8,-63,-8.1C-57.2,-21,-44.8,-29.8,-33.2,-43C-21.6,-56.1,-10.8,-73.6,4.9,-79.5C20.6,-85.3,41.2,-79.4,54,-66.5Z;
                                M41.5,-46.9C56.6,-36.8,73.5,-26.4,75.6,-13.5C77.6,-0.7,64.6,14.6,54.8,31.6C44.9,48.7,38.2,67.6,26,72.3C13.9,77.1,-3.7,67.7,-18.3,58.7C-32.9,49.7,-44.5,41.1,-49.6,29.8C-54.6,18.6,-53.1,4.7,-51.8,-10.2C-50.5,-25.2,-49.3,-41.3,-40.7,-52.6C-32.1,-63.9,-16.1,-70.3,-1.4,-68.6C13.2,-66.9,26.4,-57,41.5,-46.9Z;
                                M52.7,-55.6C68.7,-49.4,82.5,-33.2,87.5,-14C92.6,5.1,89,27.2,77.2,41.4C65.3,55.6,45,61.9,27.3,63.4C9.5,64.8,-5.8,61.5,-20,55.9C-34.2,50.4,-47.2,42.6,-55.6,30.8C-63.9,19,-67.5,3.2,-64.3,-10.7C-61.1,-24.6,-50.9,-36.6,-39.1,-43.6C-27.2,-50.6,-13.6,-52.5,2.4,-55.3C18.3,-58.1,36.7,-61.9,52.7,-55.6Z;
                                M44,-57.5C54.3,-43.9,57.9,-27.4,61.1,-10.5C64.4,6.3,67.3,23.4,62.4,39.9C57.5,56.4,44.8,72.3,29.3,76.1C13.8,79.8,-4.6,71.4,-21.2,63.2C-37.8,55,-52.6,47,-60.9,34.4C-69.2,21.7,-70.9,4.4,-67.4,-11.2C-63.8,-26.9,-55,-40.9,-42.9,-54.3C-30.8,-67.6,-15.4,-80.2,0.8,-81.1C16.9,-82,33.8,-71.2,44,-57.5Z;"
                            ></animate>    
                        </path>
                    </svg>
                </div>
                <div className='blob'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ED1700" transform="translate(100 100)">
                            <animate attributeName='d'
                                dur={"20s"}
                                repeatCount={"indefinite"}

                                values="M44,-57.5C54.3,-43.9,57.9,-27.4,61.1,-10.5C64.4,6.3,67.3,23.4,62.4,39.9C57.5,56.4,44.8,72.3,29.3,76.1C13.8,79.8,-4.6,71.4,-21.2,63.2C-37.8,55,-52.6,47,-60.9,34.4C-69.2,21.7,-70.9,4.4,-67.4,-11.2C-63.8,-26.9,-55,-40.9,-42.9,-54.3C-30.8,-67.6,-15.4,-80.2,0.8,-81.1C16.9,-82,33.8,-71.2,44,-57.5Z;
                                M41.5,-46.9C56.6,-36.8,73.5,-26.4,75.6,-13.5C77.6,-0.7,64.6,14.6,54.8,31.6C44.9,48.7,38.2,67.6,26,72.3C13.9,77.1,-3.7,67.7,-18.3,58.7C-32.9,49.7,-44.5,41.1,-49.6,29.8C-54.6,18.6,-53.1,4.7,-51.8,-10.2C-50.5,-25.2,-49.3,-41.3,-40.7,-52.6C-32.1,-63.9,-16.1,-70.3,-1.4,-68.6C13.2,-66.9,26.4,-57,41.5,-46.9Z;
                                M54,-66.5C66.7,-53.6,71.7,-33.5,74.3,-13.8C76.9,5.9,77.2,25.3,69.3,41.1C61.5,57,45.6,69.3,29.2,71.4C12.8,73.6,-4.1,65.6,-20.3,58.5C-36.4,51.4,-51.9,45.1,-60,33.5C-68.1,21.8,-68.8,4.8,-63,-8.1C-57.2,-21,-44.8,-29.8,-33.2,-43C-21.6,-56.1,-10.8,-73.6,4.9,-79.5C20.6,-85.3,41.2,-79.4,54,-66.5Z;
                                M52.7,-55.6C68.7,-49.4,82.5,-33.2,87.5,-14C92.6,5.1,89,27.2,77.2,41.4C65.3,55.6,45,61.9,27.3,63.4C9.5,64.8,-5.8,61.5,-20,55.9C-34.2,50.4,-47.2,42.6,-55.6,30.8C-63.9,19,-67.5,3.2,-64.3,-10.7C-61.1,-24.6,-50.9,-36.6,-39.1,-43.6C-27.2,-50.6,-13.6,-52.5,2.4,-55.3C18.3,-58.1,36.7,-61.9,52.7,-55.6Z;"
                            ></animate>    
                        </path>
                    </svg>
                </div>
                <div className='amigo-sangue-card'>
                <div className='amigo-sangue-info'>
                    <div>
                    <h1>Amigo de Sangue</h1>
                    <p>Site aliado a um aplicativo como uma forma de conectar de forma mais simples e acessível os doadores!</p>
                    </div>
                    <ul>
                    <h3>Problemas Solucionados</h3>
                        <li><FaCheck /> Aumento das Doações</li>
                        <li><FaCheck /> Informações de Fácil Acesso</li>
                        <li><FaCheck /> Carteirinha de Doador Digital</li>
                        <li><FaCheck /> Informações sobre Estoques</li>
                        <li><FaCheck /> Formatação de Dados p/Hemocentros</li>
                    </ul>
                    <button>Confira Nosso Projeto</button>
                </div>
                <div className='amigo-sangue-img'>
                    <img src='images/appImg.png'/>
                </div>

                </div>
                </div>
            </div>
        </section>
    )
}

export default AmigoSangue;