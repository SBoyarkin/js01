const pollTitle = document.querySelector('.poll__title')
const pollAnswers = document.querySelector('.poll__answers')
getData()

const sendAnswer = function (event) {
    console.log(event.target.textContent)
    alert('Спасибо ваш голос учтён')
}

const createElemet = function (data) {
    console.log(data)
    pollTitle.textContent = data.data.title
    Array.from(data.data.answers).forEach((e)=>
    { pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${e}</button> `)})
    const answer = document.querySelectorAll('.poll__answer')
    Array.from(answer).forEach((value)=> {value.addEventListener('click', sendAnswer)})
    }

function getData() {
    let data = {}
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
    xhr.send()
    xhr.onload = () => {data = JSON.parse(xhr.response)
        createElemet(data)}
    }