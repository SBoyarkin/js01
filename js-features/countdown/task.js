const status_id = document.getElementById('status')
    function counter() {
        if (Number(status_id.textContent.split(':')[1]) > 57) {
            status_id.textContent = status_id.textContent.split(':')[0] + ': ' + (Number(status_id.textContent.split(':')[1] -1))
        } else {
            clearInterval(inter)
            alert('Вы победили в конкурсе')
        }
    }

let inter = setInterval((counter), 1000)

