const inputText = document.getElementById('editor')
inputText.value = localStorage.getItem('text')
inputText.addEventListener('keyup', function(event) {
    localStorage.setItem('text', event.target.value)
})