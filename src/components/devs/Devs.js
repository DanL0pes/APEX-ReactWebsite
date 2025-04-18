import React from 'react';
import './Devs.css';
import { Carrosel } from './carosel';


function Devs() {


    return (
        <section className='devs' id='devs'>
            <div className='devs-container'>
                <div className='left-side'>
                    <h1>Nossa Equipe</h1>
                </div>
                <div className='right-side'>
                <svg id='blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    
                    <path fill="#FFF" transform="translate(100 100)">
                        <animate attributeName='d'
                        dur={'10s'}
                        repeatCount={"indefinite"}

                        values="M50.4,-49.7C63.9,-36.9,72.3,-18.5,73.3,1C74.3,20.5,67.9,41,54.5,55.1C41,69.2,20.5,77,1.6,75.4C-17.3,73.9,-34.7,62.9,-45.9,48.8C-57,34.7,-62.1,17.3,-64.9,-2.9C-67.8,-23.1,-68.5,-46.2,-57.4,-58.9C-46.2,-71.7,-23.1,-74,-2.3,-71.7C18.5,-69.4,36.9,-62.4,50.4,-49.7Z;
                        M53.8,-56.4C67.4,-40.2,74.4,-20.1,73.1,-1.2C71.9,17.6,62.4,35.3,48.8,46.1C35.3,56.9,17.6,60.9,-1.7,62.6C-21.1,64.4,-42.3,63.9,-57.3,53.1C-72.3,42.3,-81.1,21.1,-79.2,1.9C-77.3,-17.3,-64.6,-34.6,-49.6,-50.8C-34.6,-67,-17.3,-82,1.4,-83.4C20.1,-84.8,40.2,-72.6,53.8,-56.4Z;
                        M58,-54.5C74.2,-41.7,85.9,-20.9,85.7,-0.2C85.5,20.4,73.4,40.9,57.1,52.5C40.9,64.1,20.4,66.9,1.3,65.6C-17.8,64.3,-35.6,58.8,-50.1,47.2C-64.6,35.6,-75.9,17.8,-77.9,-2C-80,-21.8,-72.7,-43.7,-58.2,-56.4C-43.7,-69.2,-21.8,-72.8,-0.5,-72.4C20.9,-71.9,41.7,-67.2,58,-54.5Z;
                        M50.4,-49.7C63.9,-36.9,72.3,-18.5,73.3,1C74.3,20.5,67.9,41,54.5,55.1C41,69.2,20.5,77,1.6,75.4C-17.3,73.9,-34.7,62.9,-45.9,48.8C-57,34.7,-62.1,17.3,-64.9,-2.9C-67.8,-23.1,-68.5,-46.2,-57.4,-58.9C-46.2,-71.7,-23.1,-74,-2.3,-71.7C18.5,-69.4,36.9,-62.4,50.4,-49.7Z;"
                        />
                    </path>
                </svg>
                    <Carrosel />
                </div>
            </div>
        </section>
    )
}

export default Devs;