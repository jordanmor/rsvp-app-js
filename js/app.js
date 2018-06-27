easy_background("header", 
    {
        slide: ["../images/outside-venue.jpg", "../images/restaurant.jpg", "../images/concert.jpg",
                "../images/wedding.jpg", "../images/picnic.jpg"],
        delay: [15000,15000,15000,15000,15000]
    }
);

const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const ul = document.getElementById('invitedList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
});