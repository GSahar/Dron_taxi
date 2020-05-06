function processFiles(files) {
    var file = files[0];
    
    var reader = new FileReader();
  
    reader.onload = function (e) {
      // Используем URL изображения для заполнения фона
      dropBox.style.backgroundImage = "url('" + e.target.result + "')";
    };

    // Начинаем считывать изображение
    reader.readAsDataURL(file);
}

/*function drop(e) {
    // Аннулируем это событие для всех других
    e.stopPropagation();
    e.preventDefault();

    // Получаем перемещенные файлы
    var data = e.dataTransfer;
    var files = data.files;
        
    // Передаем полученный файл функции для обработки файлов
    processFiles(files);
}

function ignoreDrag(e) {
    // Обеспечиваем, чтобы никто другой не получил это событие, 
    // т.к. мы выполняем операцию перетаскивания
    e.stopPropagation();
    e.preventDefault();
}

var dropBox;

window.onload = function() {
  dropBox = document.getElementById("dropBox");
  dropBox.ondragenter = ignoreDrag;
  dropBox.ondragover = ignoreDrag;
  dropBox.ondrop = drop;
}*/