import './Portfolio.scss'
import Button from '../../components/Button';
import PortfolioCard from '../../components/PortfolioCard';
import portfolio_cards_data from '../../json/portfolio-cards.json'
import { useState } from 'react'

export default function Portfolio() {
    const [portfolio, setPortfolio] = useState(portfolio_cards_data.filter(card => card.category == 'livros'))
    const buttonsCategory = [...new Set(portfolio_cards_data.map(card => card.category))]

    function filterCategory(category) {
        const newCategory = portfolio_cards_data.filter(card => card.category == category)
        setPortfolio(newCategory);
    }

    return (
        <section className='portfolio'>
            <div className='container'>
                <div className='buttons'>
                    {buttonsCategory.map(category =>
                        <Button
                            key={category}
                            defaultActive={category == 'livros' ? 'button active-btn' : 'button'}
                            filterCategory={filterCategory}>
                                {category}
                        </Button>)
                    }
                </div>
                <div className='cards'>
                    { portfolio.map(card =>
                        <PortfolioCard
                            key={card.name}
                            image={card.image}
                            name={card.name}
                            pages={card.pages}
                            format={card.format}
                        />
                    )}
                </div>
            </div>
        </section>
        
        
    )
}