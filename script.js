let colorArr = [
    '#0000ff',
    '#009fff',
    '#0fffff',
    '#bfffff',
    '#000000',
    '#333333',
    '#666666',
    '#999999',
    '#ffcc66',
    '#ffcc02',
    '#ffff00',
    '#ffff99',
    '#013300',
    '#555001',
    '#02ff00',
    '#99ff99',
    '#f00001',
    '#ff6600',
    '#ff9933',
    '#f5deb3',
    '#330000',
    '#663300',
    '#cc6502',
    '#deb887',
    '#aa0eff',
    '#cc65cc',
    '#ff66ff',
    '#ff99ff',
    '#e8c4e7',
    '#FFFFF0',
];

let palette = document.querySelector('.palette'),
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    isMouseDown = false,
    clearBtn = document.querySelector('.clear');

for (let i = 1; i <= colorArr.length; i++) {
    palette.innerHTML += `
        <div class="color_${i}" style="background-color:${
        colorArr[i - 1]
    }; width:30px; height:30px; margin: 1px"></div>
    `;
}

canvas.width = window.innerWidth;
canvas.height = 390;

canvas.addEventListener('mousedown', (e) => {
    isMouseDown = true;
});

canvas.addEventListener('mouseup', (e) => {
    isMouseDown = false;
    ctx.beginPath();
});

function clear() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'black';
}

clearBtn.addEventListener('click', clear);

ctx.lineWidth = 10 * 2;
canvas.addEventListener('mousemove', (e) => {
    if (isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});
