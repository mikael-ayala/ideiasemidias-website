import './PortfolioModal.scss'

export default function PortfolioModal({image, name, pages, format, showModal, setShowModal}) {
    function closeModal() {
        setShowModal(false)
        document.body.style.overflow = 'unset'
    }

    return (
        showModal && <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h1>{name}</h1>
                <img src={image} />
            </div>
        </div>
    )
}