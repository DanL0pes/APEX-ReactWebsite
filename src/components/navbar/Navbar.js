import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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
                        <Link to='#quem-somos' className='nav-links' onClick={closeMobileMenu}>
                            Quem Somos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Projetos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Desenvolvedores
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Contato
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Parceiros
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;