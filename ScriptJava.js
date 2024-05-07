const divMain = document.getElementById('divID1')
let chek = true

divMain.addEventListener('dblclick', (e) => {
    const rect = divMain.getBoundingClientRect(); //Получаем координаты родительского блока  
    const x = e.clientX - rect.left;  //Получаем координату именно в блоке divMain
    const y = e.clientY - rect.top;
    const q = e.clientX //Координаты в документе
    const w = e.clientY
    if (e.button === 2) { return } //Проверка что это не правая кнопка мыши
    chekPozicion(q, w) //отправка координат в фунцию проверки не попали ли мы в кружок изменяет chek
    if(chek === true){ // Запускаем фунции рисующие кружочки
    createDot(x, y, divMain)
    }});

  function chekPozicion(q, w){ //Функция проверки по координатам
    const z = document.elementFromPoint(q, w);
    
    if(z.className ==="tododiv"){chek = false}
    else {chek = true}};

    function createDot(x, y, parentDIv) {  //в функцию добавляем 3 параметр, который указывает в какой элемент мы будем добавлять точки. Сделаю пример что бы показать как это работае ниже
        const dot = document.createElement('div')
        
        dot.className = "tododiv"; //Маленький кружок
        dot.id = "ToDoMove"
        dot.style.position = 'absolute';
        dot.style.left = x - 10 + 'px';
        dot.style.top = y - 10 + 'px'; 
        dot.addEventListener("mousedown",(event)=>{foo(event,dot)})
        parentDIv.append(dot);
        
    }

     

const foo = function(e,ball) { // 1. отследить нажатие
console.log(ball)
  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  ball.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(ball);

  ball.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  }
}