const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', function() {
        listElement.classList.toggle('dropdown__list_active');
    });

    const items = dropdown.querySelectorAll('.dropdown__item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const newValue = item.textContent;
            valueElement.textContent = newValue;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', function(event) {
    event.preventDefault()
    dropdowns.forEach(dropdown => {
        const listElement = dropdown.querySelector('.dropdown__list');
        if (!dropdown.contains(event.target)) {
            listElement.classList.remove('dropdown__list_active');
        }
    });
});

