import './PortfolioCard.scss'
import { useState } from 'react';
import PortfolioModal from '../PortfolioModal'

export default function PortfolioCard({image, name, pages, format}) {
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <>
            <div className="portfolio-card" onClick={() => openModal()}>
                <img className='img' src={image} />
                <div className='text'>
                    <p className='name'>{name}</p>
                    <p className='description'>{pages}</p>
                    <p className='description'>{format}</p>
                </div>
            </div>
            <PortfolioModal
                image={image}
                name={name}
                pages={pages}
                format={format}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    )
}