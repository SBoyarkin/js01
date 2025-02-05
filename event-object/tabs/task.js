tabs = [...document.querySelectorAll('.tab')]
tabs_content = [...document.querySelectorAll('.tab__content')]
console.log(tabs)
console.log(tabs_content)

const change_tabs = function (index) {
    tabs_content.forEach((value, i, array) => {i == index
        ? value.classList.add('tab__content_active')
        : value.classList.remove('tab__content_active')})

}

tabs.forEach((value, index, array)=> value.addEventListener('click',
    ()=> array.forEach((el, idx) => {idx == index
        ? (el.classList.add('tab_active'), change_tabs(index))
        : el.classList.remove('tab_active')})))


