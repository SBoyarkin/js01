const has_tooltip = [...document.querySelectorAll('.has-tooltip')]

const create_tooltip = function(text, x) {
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.classList.add('tooltip_active')
    tooltip.style.left = `${x}px`
    tooltip.innerText = text
    return tooltip

}

const open_tooltip = function (event) {
    event.preventDefault()
     let el = create_tooltip(event.target.getAttribute('title'), event.target.offsetLeft,)
    active_tooltip = document.querySelector('.tooltip')
    if (active_tooltip === null) {
       let obj = el
        event.target.appendChild(obj)
    } else {
        if (event.target.children.length > 0) {
            event.target.removeChild(active_tooltip)
        }
        else {
            active_tooltip.parentElement.removeChild(active_tooltip)
            let obj = el
        event.target.appendChild(obj)
        }
    }
}

has_tooltip.forEach((value) => value.addEventListener('click', open_tooltip))
