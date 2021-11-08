const openBtn = document.querySelector('.ham-icon');
const popup = document.querySelector('#popup-1');
const closeBtn = document.querySelector('.close-btn');

// mobile popup



openBtn.addEventListener('click', function () {
    if (popup.style.display == 'none') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});

closeBtn.addEventListener('click', function () {
    if (popup.style.display == 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
});
