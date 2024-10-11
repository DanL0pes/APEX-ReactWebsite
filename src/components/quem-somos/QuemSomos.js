import React from 'react';
import './QuemSomos.css';

function QuemSomos() {

    return (
        <section className='quem-somos' id='quem-somos'>
            <div className='quem-somos-container'>
                <div className='quem-somos-card'>
                    <img src='images/QuemSomos.svg'/>
                </div>
                <div className='quem-somos-info'>
                    <h2>Quem Somos</h2>
                    <p>A <strong>APEX</strong> é uma pequena empresa especializada na criação de softwares, com o objetivo de solucionar os problemas dos clientes de maneira rápida e eficaz, como também inovar.</p>
                </div>
            </div>
        </section>
    )
}

export default QuemSomos;