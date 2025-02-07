reveal = [...document.querySelectorAll('.reveal')]


const show = function () {
   h = window.innerHeight
   reveal.forEach((value, index) => {let i = value.getBoundingClientRect()
   if (i.top < h) {
       value.classList.add('reveal_active')
   }
   if (i.bottom > h) {
      value.classList.remove('reveal_active')
   }
   } )


}

document.addEventListener('scroll', show)



