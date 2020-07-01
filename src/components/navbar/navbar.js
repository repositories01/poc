import React from  'react';
import {nav, link}  from './navbar.module.scss';

export default function Navbar(){
    return(
        <header>
            <nav className={nav}>
                <a href="#" className={link}>Sobre</a>
                <button>
                    Entrar
                </button>
            </nav>
        </header>
    );
}