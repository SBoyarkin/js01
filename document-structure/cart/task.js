const control_dec = [...document.querySelectorAll('.product__quantity-control_dec')]
const control_inc = [...document.querySelectorAll('.product__quantity-control_inc')]
const product_add = [...document.querySelectorAll('.product__add')]
const cart_products = document.querySelector('.cart__products')

const add_cart_product = function (element) {
    const count_cart = cart_products.querySelectorAll('.cart__product')
    if (!count_cart.length) {
        cart_products.appendChild(element)
    } else
    {
        const in_cart = [...count_cart].findIndex((value)=> { return value.dataset.id == element.dataset.id} )
        if (in_cart == -1) {
            cart_products.appendChild(element)
        }
        else {
            let current_count = count_cart.item(in_cart).querySelector('.cart__product-count')
            current_count.textContent = Number(current_count.textContent) + Number(element.querySelector('.cart__product-count').textContent)
        }
    }
}

const dec = function (event) {
    console.log(event)
    cur_val = Number(event.target.nextElementSibling.textContent)
    if (cur_val  > 0) {
        cur_val -= 1
        event.target.nextElementSibling.textContent = cur_val
    }
}

const inc = function (event) {
    console.log(event)
    cur_val = Number(event.target.previousElementSibling.textContent)
    cur_val += 1
    event.target.previousElementSibling.textContent = cur_val
}

const append_products = function (event) {
        let product = event.currentTarget.closest('.product')
        let url = product.querySelector('.product__image')
        url.getAttribute('href')
        let cp = document.createElement("div")
        let a = document.createElement('img')
        let product_count = document.createElement('div')
        cp.classList.add('cart__product')
        cp.dataset.id = product.dataset.id
        a.classList.add('cart__product-image')
        a.setAttribute('src', url.src)
    product_count.classList.add('cart__product-count')
    product_count.textContent = event.currentTarget.previousElementSibling.querySelector('.product__quantity-value').textContent // добавить сюда колличество
    cp.appendChild(a)
    cp.appendChild(product_count)
    add_cart_product(cp)
}

control_dec.forEach((value) => {value.addEventListener('click', dec)})
control_inc.forEach((value) => {value.addEventListener('click', inc)})
product_add.forEach((value) => {value.addEventListener('click', append_products)})
