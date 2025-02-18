const controlDec = [...document.querySelectorAll('.product__quantity-control_dec')]
const controlInc = [...document.querySelectorAll('.product__quantity-control_inc')]
const productAdd = [...document.querySelectorAll('.product__add')]
const cartProducts = document.querySelector('.cart__products')

const addCartProduct = function (element) {
    const countCart = cartProducts.querySelectorAll('.cart__product')
    if (!countCart.length) {
        cartProducts.appendChild(element)
    } else
    {
        const inCart = [...countCart].findIndex((value)=> { return value.dataset.id == element.dataset.id} )
        if (inCart == -1) {
            cartProducts.appendChild(element)
        }
        else {
            let current_count = countCart.item(inCart).querySelector('.cart__product-count')
            current_count.textContent = Number(current_count.textContent) + Number(element.querySelector('.cart__product-count').textContent)
        }
    }
}

const dec = function (event) {
    cur_val = Number(event.target.nextElementSibling.textContent)
    if (cur_val  > 1) {
        cur_val -= 1
        event.target.nextElementSibling.textContent = cur_val
    }
}

const inc = function (event) {
    cur_val = Number(event.target.previousElementSibling.textContent)
    cur_val += 1
    event.target.previousElementSibling.textContent = cur_val
}

const appendProducts = function (event) {
        let product = event.currentTarget.closest('.product')
        let url = product.querySelector('.product__image')
        url.getAttribute('href')
        let cp = document.createElement("div")
        let a = document.createElement('img')
        let productCount = document.createElement('div')
        cp.classList.add('cart__product')
        cp.dataset.id = product.dataset.id
        a.classList.add('cart__product-image')
        a.setAttribute('src', url.src)
    productCount.classList.add('cart__product-count')
    productCount.textContent = event.currentTarget.previousElementSibling.querySelector('.product__quantity-value').textContent
    cp.appendChild(a)
    cp.appendChild(productCount)
    addCartProduct(cp)
}

controlDec.forEach((value) => {value.addEventListener('click', dec)})
controlInc.forEach((value) => {value.addEventListener('click', inc)})
productAdd.forEach((value) => {value.addEventListener('click', appendProducts)})
