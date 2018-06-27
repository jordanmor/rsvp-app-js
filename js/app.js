easy_background("header", 
    {
        slide: ["../images/outside-venue.jpg", "../images/restaurant.jpg", "../images/concert.jpg",
                "../images/wedding.jpg", "../images/picnic.jpg"],
        delay: [15000,15000,15000,15000,15000]
    }
);

const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
});

ul.addEventListener('change', e => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const li = checkbox.parentElement.parentElement;
    
    checked ? li.className = 'responded' : li.className = '';

});