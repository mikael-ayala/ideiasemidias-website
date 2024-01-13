import './ErrorPage.scss'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='errorPage'>
            <h1>Erro 404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">Voltar</Link>
        </div>
    )
}