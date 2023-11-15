import ServicosCard from '../ServicosCard'
import './Servicos.scss'
import cards from '../../json/servicos-cards.json'

export default function Servicos() {
    return (
        <section className='servicos'>
            <div className="container">
                <h2>Serviços</h2>

                <div className='servicos__cards-container'>
                    {cards.map(card => <ServicosCard key={card.text} image={card.image} text={card.text} /> )}
                </div>
            </div>
        </section>
    )
}