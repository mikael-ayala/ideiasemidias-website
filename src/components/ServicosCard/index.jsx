import './ServicosCard.scss'

export default function ServicosCard({image, text}) {
    return (
        <div className='servicos-card'>
            <img src={image} />
            <p>{text}</p>
        </div>
    )
}