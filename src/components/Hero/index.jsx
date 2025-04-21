import './Hero.scss'
import bgImg from '../../assets/background-img.png'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__text">
                    <h1>Quem somos</h1>
                    <p>Somos uma empresa com uma equipe que, acima de tudo, tem carinho e respeito pelo projeto de seus clientes.
                        Com profissionais que atuam no mercado gráfico há mais de 30 anos, trazemos uma bagagem de conhecimento para ajudar a transformar os sonhos de nossos clientes em mídias impressas e digitais de qualidade.
                        <br />
                        <br />
                        Se o seu objetivo é publicar um livro, uma revista, um folder ou catálogo pode confiar, pois estamos preparados para lhe oferecer as melhores diversas soluções gráficas para tornar o seu propósito uma realidade.
                    </p>
                </div>
            </div>

            <img className="hero__background-img" src={bgImg} />
        </section>
    )
}