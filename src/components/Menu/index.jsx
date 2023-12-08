import './Menu.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-ideiasemidias.svg?react'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'

export default function Menu() {
    return (
        <>
        <header className='menu container'>
            <div className="container-menu">
                <Logo width="186" height="130" />
                <div className="container-menu-right">
                    <div className='container-icons'>
                        <a href="https://web.whatsapp.com/" target='_blank' rel="noreferrer">
                            <img className='nav-icons' src={whatsapp} />
                        </a>
                        <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                            <img className='nav-icons' src={instagram} />
                        </a>
                    </div>

                    <a className='email' href="mailto:ideiasemidias@gmail.com">ideiasemidias@gmail.com</a>
                </div>
            </div>
        </header>
        <div className='navbar'>
            <div className="container">
                <nav>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Quem Somos</NavLink>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink>
                </nav>
            </div>
        </div>
        </>
        
    )
}