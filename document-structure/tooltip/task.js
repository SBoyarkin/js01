const hasTooltip = [...document.querySelectorAll('.has-tooltip')]

const createTooltip = function(text, x, y) {
    let tooltip = document.createElement('div')
    tooltip.classList.add('tooltip')
    tooltip.classList.add('tooltip_active')
    tooltip.style.left = `${x}px`
    tooltip.style.top = `${y + 20}px`
    tooltip.innerText = text
    return tooltip

}

const openTooltip = function (event) {
    event.preventDefault()
     let el = createTooltip(event.target.getAttribute('title'), event.target.offsetLeft, event.target.offsetTop)
    activeTooltip = document.querySelector('.tooltip')
    if (activeTooltip === null) {
       event.target.insertAdjacentElement("beforebegin", el)
    }
    else if (event.target.previousElementSibling === activeTooltip) {
       activeTooltip.remove()
    }
    else {
        activeTooltip.remove()
        event.target.insertAdjacentElement("beforebegin", el)
    }
}

hasTooltip.forEach((value) => value.addEventListener('click', openTooltip))
