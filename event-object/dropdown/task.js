let dropdown_btn = document.querySelector('.dropdown__value')
let dropdown_list = document.querySelector('.dropdown__list')
let dropdown_item = document.querySelectorAll('.dropdown__item')
let dropdown_value = document.querySelector('.dropdown__value')
console.log(dropdown_value)
const click_item = function (event) {
    event.preventDefault()
    dropdown_value.textContent = this.textContent
    odd()
}

dropdown_item.forEach((element) => {element.addEventListener('click',click_item) })

const odd = function(event) {
    dropdown_list.classList.toggle('dropdown__list_active');
}

dropdown_btn.addEventListener('click', odd)


