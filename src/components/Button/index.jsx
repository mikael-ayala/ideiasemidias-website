import './Button.scss'

export default function Button({children, filterCategory, defaultActive}) {
    function setActive(event) {
        let buttons = document.getElementsByClassName('button')
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active-btn')
        }
        event.target.classList.add('active-btn')
    }

    return (
        <button className={defaultActive} onClick={e => {
            filterCategory(children)
            setActive(e)
        }}>
            {children}
        </button>
    )
}