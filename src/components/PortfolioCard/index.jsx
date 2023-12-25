import './PortfolioCard.scss'

export default function PortfolioCard({image, name, pages, format, isEbook, squareImage}) {
    return (
        <div className="portfolio-card">
            <div className='img-container'>
                <img className={squareImage ? 'img squareImage' : 'img'} src={image} />
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