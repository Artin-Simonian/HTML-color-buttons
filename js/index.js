// DIV area
const divArea = document.getElementById("color-space");
const redBtn = document.getElementById('red')
const orangeBtn = document.getElementById('orange');
const yellowBtn = document.getElementById('yellow');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');
const indigoBtn = document.getElementById('indigo');
const violetBtn = document.getElementById('violet');
const textEl = document.getElementById('color-space-text')


// Button variables by ID
redBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'red';
    textEl.textContent = 'Color is: Red'
})

orangeBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'orange';
    textEl.textContent = 'Color is: Orange';
})

yellowBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'yellow';
    textEl.textContent = 'Color is: Yellow';
})

greenBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'green';
    textEl.textContent = 'Color is: Green';
})

blueBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'blue';
    textEl.textContent = 'Color is: Blue';
})

indigoBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'indigo';
    textEl.textContent = 'Color is: Indigo';
})

violetBtn.addEventListener('click', function(){
    divArea.style.backgroundColor = 'violet';
    textEl.textContent = 'Color is: Violet';
})


