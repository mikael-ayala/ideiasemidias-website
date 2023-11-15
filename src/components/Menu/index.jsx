import './Menu.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-ideiasemidias.svg?react'
import Instagram from '../../assets/instagram.svg?react'
import Whatsapp from '../../assets/whatsapp.svg?react'
import Email from '../../assets/email.svg?react'

export default function Menu() {
    return (
        <>
        <header className='menu container'>
            <div className="container-menu">
                <Logo width="186" height="130" />
                <div className='icons'>
                    <a href="mailto:juarezrodolpho@gmail.com" target='_blank' rel="noreferrer">
                        <Email width="38" height="32" fill="#000" />
                    </a>
                    <a href="https://web.whatsapp.com/" target='_blank' rel="noreferrer">
                        <Whatsapp width="32" height="32" fill="#000" />
                    </a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                        <Instagram width="32" height="32" fill="#000" />
                    </a>
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