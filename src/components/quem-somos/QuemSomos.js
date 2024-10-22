import React from 'react';
import './QuemSomos.css';

function QuemSomos() {

    return (
        <section className='quem-somos' id='quem-somos'>
            <div className='quem-somos-container'>
                <div className='quem-somos-card'>
                    <img src='images/QuemSomos.svg' />
                </div>
                <div className="quem-somos-info">
                    <div className='quem-somos-header'>
                        <h2>Quem Somos</h2>
                        <p>A <strong>APEX</strong> é uma pequena empresa especializada na criação de softwares, com o objetivo de solucionar os problemas dos clientes de maneira rápida e eficaz, como também inovar.</p>
                    </div>
                    <div className='quem-somos-cards'>
                        <div className='quem-somos-infoCard'>
                            <h2>Nosso Diferencial</h2>
                            <ul>
                                <li>
                                    Atendimento personalizado com foco nas suas necessidades.
                                </li>
                                <li>
                                    Equipe técnica especializada e comprometida com a qualidade.
                                </li>
                                <li>
                                    Soluções sob medida que otimizam processos e trazem resultados.
                                </li>
                            </ul>
                        </div>
                        <div className='quem-somos-infoCard'>
                            <h2>Nosso Diferencial</h2>
                            <ul>
                                <li>Atendimento personalizado com foco nas suas necessidades.</li>
                                <li>Equipe técnica especializada e comprometida com a qualidade.</li>
                                <li>Soluções sob medida que otimizam processos e trazem resultados.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuemSomos;