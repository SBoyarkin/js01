const loaderElement = document.getElementById('loader')
const loadedItems = document.getElementById('items')
getCourse()


const createElement = function (data) {
    const jsonData = JSON.parse(data).response.Valute
    for (let el in jsonData) {
        loadedItems.insertAdjacentHTML('beforeend',
`   <div class="item">   
        <div class="item__code">${jsonData[el].CharCode}</div>
        <div class="item__value">${jsonData[el].Value}</div>
        <div class="item__currency">руб.</div>
        </div>
`
        )
    }
    loaderElement.classList.remove('loader_active')

}


function getCourse() {
    let data = {}
    const request = new XMLHttpRequest()
    request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    request.send()
    request.onload = () => {
        data = request.response
        createElement(data)
    }
}


