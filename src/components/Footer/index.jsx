import './Footer.scss'
import logoFooter from '../../assets/logo-footer.png'
import Instagram from '../../assets/instagram.svg?react'
import Whatsapp from '../../assets/whatsapp.svg?react'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-container container">
                <img onClick={() => {document.body.scrollIntoView({behavior: 'smooth', block: 'start'})}} className='logo-footer' src={logoFooter} />
                <div className='icons-footer'>
                    <a href="https://web.whatsapp.com/" target='_blank' rel="noreferrer">
                        <Whatsapp width="24" height="24" fill="#fff" />
                    </a>
                    <a href="https://www.instagram.com/" target='_blank' rel="noreferrer">
                        <Instagram width="24" height="24" fill="#fff" />
                    </a>
                </div>
            </div>
        </footer>
    )
}