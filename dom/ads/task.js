const rotator_list = [...document.getElementsByClassName('rotator')]

const rotation = function (e) {
    let carent_active = [...e.children].findIndex((item) => {
        return item.classList.contains('rotator__case_active');
    });

    console.log(carent_active)
    e.children.item(carent_active).classList.toggle('rotator__case_active')
    if (carent_active < e.children.length-1) {
        console.log(e.children.length)
        e.children.item(carent_active+1).classList.toggle('rotator__case_active')

        carent_active +=1
        console.log(e.children.item(carent_active))
        console.log(carent_active)
    } else {carent_active = 0
    e.children.item(carent_active).classList.toggle('rotator__case_active')
    }
};



rotator_list.forEach(value => (setInterval(() =>rotation(value), 1000)))
// rotator_list.forEach(value => value.addEventListener('click', () => rotation(value)))