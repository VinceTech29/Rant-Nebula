const rantInput = document.getElementById('rantInput');
const rantBtn = document.getElementById('rantBtn');

let rants = JSON.parse(localStorage.getItem('rants')) || [];

function createRantShape(text) {
    const shape = document.createElement('div');
    shape.className = 'rant-shape';


    const shapes = ['bubble', 'cloud', 'blob'];
    const chosenShape = shapes[Math.floor(Math.random() * shapes.length)];
    shape.classList.add(chosenShape);

    shape.textContent = text;


    shape.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    shape.style.top = Math.random() * (window.innerHeight - 100) + 'px';

    const size = 80 + Math.random() * 100;
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.lineHeight = size * 0.8 + 'px';

    document.body.appendChild(shape);


    let dx = (Math.random() - 0.5) * 1.2; 
    let dy = (Math.random() - 0.5) * 1.2;

    function move() {
        let x = parseFloat(shape.style.left);
        let y = parseFloat(shape.style.top);

        x += dx;
        y += dy;

        if (x < 0 || x + size > window.innerWidth) dx *= -1;
        if (y < 0 || y + size > window.innerHeight) dy *= -1;

        shape.style.left = x + 'px';
        shape.style.top = y + 'px';

        requestAnimationFrame(move);
    }
    move();
}

// Add new rant
function addRant() {
    const text = rantInput.value.trim();
    if (!text) return;
    rants.push(text);
    localStorage.setItem('rants', JSON.stringify(rants));
    rantInput.value = '';
    createRantShape(text);
}


rants.forEach(r => createRantShape(r));

rantBtn.addEventListener('click', addRant);
rantInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addRant();
});