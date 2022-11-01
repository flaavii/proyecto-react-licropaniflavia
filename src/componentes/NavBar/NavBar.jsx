import React from 'react'
import CartWidget from './CartWidget'
import "../NavBar/NavBar.css"

function NavBar
() {
  return (
    <nav className='navBar'>
        <ul>
            <li>
                <a href='/'>
                <h2>Mi Libro</h2>
                </a>
            </li>
            <li>
                <a href='/'>Nuevo Libro</a>
            </li>
            <li>
                <a href='https://www.change.org/p/presidente-alberto-fern%C3%A1ndez-despenalizacion-de-hongos-alucin%C3%B3genos-en-argentina-por-la-salud-mental-y-la-ciencia'>Firmá la Petición!</a>
            </li>
            <li>
                <CartWidget/>
            </li>

        </ul>
        
    </nav>
  )
}

export default NavBar
