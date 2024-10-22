
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { DiGithub } from 'react-icons/di';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { useState } from "react";

export function Carrosel() {
  
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    }
};

const [developers, setDevelopers] = useState([
    {
        "id": 1,
        "nome": 'André A.',
        "funcao":'Designer',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 2,
        "nome": 'Daniel L.',
        "funcao":'Dev Full',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 3,
        "nome": 'Emmanuele F.',
        "funcao":'Dev FrontEnd',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 4,
        "nome": 'Emilly',
        "funcao":'Analista',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 5,
        "nome": 'Evellen G.',
        "funcao":'Gerente',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 6,
        "nome": 'Juliana',
        "funcao":'DB',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 7,
        "nome": 'Luana',
        "funcao":'Dev FrontEnd',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 8,
        "nome": 'Luckas L.',
        "funcao":'Tester',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
    {
        "id": 9,
        "nome": 'Rhuan P.',
        "funcao":'Dev BackEnd',
        "linkGit": '',
        "linkInsta": '',
        "linkLinkedIn": ''
    },
]);


  return (
    <Carousel
                    responsive={responsive}
                    containerClass="carousel-container"
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable>
                        {developers.map(function(dev){
                            return (
                                <div className='devs-card' key={dev.id}>
                                    <img src='images/daniel.jpeg' />
                                    <p id="card-nome">{dev.nome}</p>
                                    <p id="card-funcao">{dev.funcao}</p>
                                    <div className='links-dev'>
                                        <a href=''>
                                            <DiGithub />
                                        </a>
                                        <a href=''>
                                            <BsInstagram />
                                        </a>
                                        <a href=''>
                                            <BsLinkedin />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                </Carousel>
  );
}