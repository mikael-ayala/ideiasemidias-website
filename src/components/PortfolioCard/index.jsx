import './PortfolioCard.scss'

export default function PortfolioCard({image, name, pages, format}) {
    return (
        <div className="portfolio-card">
            <img className='img' src={image} />
            <div className='text'>
                <p className='name'>{name}</p>
                <p className='description'>{pages}</p>
                <p className='description'>{format}</p>
            </div>
        </div>
    )
}