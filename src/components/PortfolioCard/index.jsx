import './PortfolioCard.scss'

export default function PortfolioCard({image, name, pages, format, isEbook}) {
    return (
        <div className="portfolio-card">
            <div className='img-container'>
                <img className='img' src={image} />
                {isEbook ? <div className='tag-ebook'>Ebook</div> : ''}
            </div>
            <div className='text'>
                <p className='name'>{name}</p>
                <p className='description'>{format}</p>
                <p className='description'>{pages}</p>
            </div>
        </div>
    )
}