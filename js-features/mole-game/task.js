const dead_count = document.getElementById('dead')
const lost_count = document.getElementById('lost')
const click = function (id) {
  if (id.srcElement.className !==  'hole') {
       dead_count.textContent = Number(dead_count.textContent) + 1
        if (dead_count.textContent == 10) {
            alert('Вы выйграли')
            clear_result()
        }
  } else {
      lost_count.textContent = Number(lost_count.textContent) + 1
      if (lost_count.textContent == 5) {
          alert('Вы проиграли')
          clear_result()

        }
  }

}

const clear_result = function () {
    dead_count.textContent = 0;
    lost_count.textContent = 0;
}


for ( i = 1; i < 9; i++) {
const hole = document.getElementById(`hole${i}`)
    hole.onclick = click
    console.log(hole)
}