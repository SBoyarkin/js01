const coc_img = document.getElementById('cookie')
const clicker_counter = document.getElementById('clicker__counter')
function counter() {
    clicker_counter.textContent = +clicker_counter.textContent + 1
    if (coc_img.width === 200) {
        console.log(200)
        coc_img.width += 50
    } else {
        coc_img.width -= 50
    }


}