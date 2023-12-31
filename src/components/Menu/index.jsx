import './Menu.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-ideiasemidias.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'

export default function Menu() {
    return (
        <>
        <header className='menu container'>
            <div className="container-menu">
                <img className='logo-menu' src={logo} />
                <div className="container-menu-right">
                    <div className='container-icons'>
                        <a href="https://wa.me/555192978050" target='_blank' rel="noreferrer">
                            <img className='nav-icons' src={whatsapp} />
                        </a>
                        <a href="https://www.instagram.com/ideiasemidias" target='_blank' rel="noreferrer">
                            <img className='nav-icons' src={instagram} />
                        </a>
                    </div>

                    <a className='email' href="mailto:juarezrodolpho@gmail.com">juarezrodolpho@gmail.com</a>
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