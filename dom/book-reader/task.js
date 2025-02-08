const font_size_icon = [...document.querySelectorAll('.font-size')]
const book = document.getElementById('book')

font_size_icon.forEach((value) => {value.addEventListener('click', function (e) {
    e.preventDefault()
    let active = font_size_icon.findIndex((el)=> el.classList.contains('font-size_active'))
    font_size_icon[active].classList.toggle('font-size_active')
    e.target.classList.toggle('font-size_active')
    if (e.target.dataset.size) {
        book.classList = book.classList[0]
        book.classList.add(`book_fs-${e.target.dataset.size}`)
    } else book.classList = book.classList[0]
})})

