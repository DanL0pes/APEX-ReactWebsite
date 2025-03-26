import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import { HiOutlineMenuAlt2  } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <IoClose /> : <HiOutlineMenuAlt2 />}
                </div>
                <Link to='/' className='nav-logo'>
                    <img src='/images/logoPreta.png'/>
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='quem-somos' className='nav-links' smooth={true} onClick={closeMobileMenu}>
                            Quem Somos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projetos' className='nav-links' smooth={true} onClick={closeMobileMenu}>
                            Projeto
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='devs' className='nav-links' smooth={true} onClick={closeMobileMenu}>
                            Equipe
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='parceiros' className='nav-links' smooth={true} onClick={closeMobileMenu}>
                            Parceiros
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contato' className='nav-links' smooth={true} onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;