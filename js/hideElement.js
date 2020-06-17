function buttonCancel(namefield) {
  let i, contentAsterisk;

  //поле для вывода пола
  document.getElementById("input-sex-text").style.display = "block";
  //группа чекбоксов для определения пола
  document.getElementById("group-check-sex").style.display = "none";
  //кнопка редактирования
  document.getElementById("button-edit").style.visibility = "visible";


  //Элементы которые изначально скрыты
  //кнопка обновитить фотографию
  //поле подтверждения пароля
  //группа кнопок сохранить/отмена
  contentAsterisk = document.getElementsByClassName("hideElement");
  for (i = 0; i < contentAsterisk.length; i++) {
    contentAsterisk[i].style.visibility = "hidden";
  }

  let inputElem = document.getElementsByClassName(namefield);
  for (i = 0; i < inputElem.length; i++) {
    inputElem[i].setAttribute('disabled', 'disabled'); // сделать неактивной     

    //стиль input при просмотре
    inputElem[i].style.border = '2px solid #800080';
    inputElem[i].style.borderBottom = '2px solid #00BFFF';
    inputElem[i].style.borderRadius = '0px';
    inputElem[i].style.color = '#ffffff';
    inputElem[i].style.backgroundColor = '#800080';
  }

  //включение видимости кнопки календаря
  let element = document.getElementById('dob');
  element.style['-webkit-calendar-picker-indicator'] = 'display: block;';

  document.getElementById('surname').placeholder = "";
  document.getElementById('name').placeholder = "";
  document.getElementById('patronymic').placeholder = "";
  document.getElementById('dob').placeholder = "";
  document.getElementById('email').placeholder = "";
  document.getElementById('telephon').placeholder = "";
  document.getElementById('pass').placeholder = "";
  document.getElementById('rpass').placeholder = "";
}

/*функция вызываемая при нажатии кнопки редактирования */
function buttonEdit() {
  let i, contentAsterisk;

  //поле для вывода пола
  document.getElementById("input-sex-text").style.display = "none";
  //группа чекбоксов для определения пола
  document.getElementById("group-check-sex").style.display = "block";
  //кнопка редактирования
  document.getElementById("button-edit").style.visibility = "hidden";

  //Элементы которые изначально скрыты
  //кнопка редактирования
  //кнопка обновитить фотографию
  //поле подтверждения пароля
  //группа кнопок сохранить/отмена
  contentAsterisk = document.getElementsByClassName("hideElement");
  for (i = 0; i < contentAsterisk.length; i++) {
    contentAsterisk[i].style.visibility = "visible";
  }


  let inputElem = document.getElementsByClassName("input-field");
  for (i = 0; i < inputElem.length; i++) {
    inputElem[i].removeAttribute('disabled');// сделать активной  

    //стиль для input при редактировании
    inputElem[i].style.border = 'solid 2px #00BFFF';
    inputElem[i].style.borderBottom = 'solid 2px #00BFFF';
    inputElem[i].style.borderRadius = '5px';
    inputElem[i].style.color = '#000000';
    inputElem[i].style.backgroundColor = '#ffffff';

  }

  document.getElementById('surname').placeholder = "Введите фамилию";
  document.getElementById('name').placeholder = "Введите имя";
  document.getElementById('patronymic').placeholder = "Введите отчество";
  document.getElementById('dob').placeholder = "Введите дату";
  document.getElementById('email').placeholder = "Введите адрес почты";
  document.getElementById('telephon').placeholder = "Введите номер ( формат: 9 999-999-9999 )";
  document.getElementById('pass').placeholder = "Введите пароль";
  document.getElementById('rpass').placeholder = "Повторите пароль";

  //отключение видимости кнопки календаря
  let element = document.getElementById('dob');
  element.style['-webkit-calendar-picker-indicator'] = 'display: none;';
}

/*функция вызываемая при нажатии кнопки редактирования */
function buttonEdit1() {
  let i, contentAsterisk;

  //поле для вывода пола
  document.getElementById("input-sex-text1").style.display = "none";
  //группа чекбоксов для определения пола
  document.getElementById("group-check-sex1").style.display = "block";
  //кнопка редактирования
  document.getElementById("button-add").style.visibility = "hidden";
  //
  document.getElementById("contant-user-input").style.display = "block";
  //
  document.getElementById("contant-user-maneg").style.display = "none";

  //Элементы которые изначально скрыты
  //кнопка редактирования
  //кнопка обновитить фотографию
  //поле подтверждения пароля
  //группа кнопок сохранить/отмена
  contentAsterisk = document.getElementsByClassName("hideElement1");
  for (i = 0; i < contentAsterisk.length; i++) {
    contentAsterisk[i].style.visibility = "visible";
  }


  let inputElem = document.getElementsByClassName("input-field1");
  for (i = 0; i < inputElem.length; i++) {
    inputElem[i].removeAttribute('disabled');// сделать активной  

    //стиль для input при редактировании
    inputElem[i].style.border = 'solid 2px #00BFFF';
    inputElem[i].style.borderBottom = 'solid 2px #00BFFF';
    inputElem[i].style.borderRadius = '5px';
    inputElem[i].style.color = '#000000';
    inputElem[i].style.backgroundColor = '#ffffff';

  }

  document.getElementById('surname1').placeholder = "Введите фамилию";
  document.getElementById('name1').placeholder = "Введите имя";
  document.getElementById('patronymic1').placeholder = "Введите отчество";
  document.getElementById('dob1').placeholder = "Введите дату";
  document.getElementById('email1').placeholder = "Введите адрес почты";
  document.getElementById('telephon1').placeholder = "Введите номер ( формат: 9 999-999-9999 )";
  document.getElementById('pass1').placeholder = "Введите пароль";
  document.getElementById('rpass1').placeholder = "Повторите пароль";

  //отключение видимости кнопки календаря
  let element = document.getElementById('dob');
  element.style['-webkit-calendar-picker-indicator'] = 'display: none;';
}

function buttonCancel1(namefield) {

  //contant-user-maneg
  //contant-user-input
  let i, contentAsterisk;

  //поле для вывода пола
  document.getElementById("input-sex-text1").style.display = "block";
  //группа чекбоксов для определения пола
  document.getElementById("group-check-sex1").style.display = "none";
  //кнопка редактирования
  document.getElementById("button-add").style.visibility = "visible";
  //
  document.getElementById("contant-user-input").style.display = "none";
  //
  document.getElementById("contant-user-maneg").style.display = "block";


  //Элементы которые изначально скрыты
  //кнопка обновитить фотографию
  //поле подтверждения пароля
  //группа кнопок сохранить/отмена
  contentAsterisk = document.getElementsByClassName("hideElement1");
  for (i = 0; i < contentAsterisk.length; i++) {
    contentAsterisk[i].style.visibility = "hidden";
  }

  let imageElem = document.getElementsByClassName("image-profile1");

  for (i = 0; i < imageElem.length; i++) {

    imageElem[i].style.backgroundImage = 'url("img/clear-prof.png")';

  }

  let inputElem = document.getElementsByClassName(namefield);
  for (i = 0; i < inputElem.length; i++) {
    inputElem[i].setAttribute('disabled', 'disabled'); // сделать неактивной     

    //стиль input при просмотре
    inputElem[i].style.border = '2px solid #800080';
    inputElem[i].style.borderBottom = '2px solid #00BFFF';
    inputElem[i].style.borderRadius = '0px';
    inputElem[i].style.color = '#ffffff';
    inputElem[i].style.backgroundColor = '#800080';
  }

  //включение видимости кнопки календаря
  let element = document.getElementById('dob');
  element.style['-webkit-calendar-picker-indicator'] = 'display: block;';

  document.addEventListener('click', function (e) {
    var nameInput = document.getElementById('surname1');
    nameInput.value = "";

    var nameInput = document.getElementById('name1');
    nameInput.value = "";

    var nameInput = document.getElementById('patronymic1');
    nameInput.value = "";

    var nameInput = document.getElementById('dob1');
    nameInput.value = "";

    var nameInput = document.getElementById('email1');
    nameInput.value = "";

    var nameInput = document.getElementById('telephon1');
    nameInput.value = "";

    var nameInput = document.getElementById('pass1');
    nameInput.value = "";

    var nameInput = document.getElementById('rpass1');
    nameInput.value = "";

  }, false);
}


/*функция вызываемая при нажатии кнопки редактирования */
function buttonEdit2() {
  let i, contentAsterisk;

  //поле для вывода пола
  document.getElementById("input-sex-text1").style.display = "none";
  //группа чекбоксов для определения пола
  document.getElementById("group-check-sex1").style.display = "block";
  //кнопка редактирования
  document.getElementById("button-add").style.visibility = "hidden";
  //
  document.getElementById("contant-user-input").style.display = "block";
  //
  document.getElementById("contant-user-maneg").style.display = "none";

  //Элементы которые изначально скрыты
  //кнопка редактирования
  //кнопка обновитить фотографию
  //поле подтверждения пароля
  //группа кнопок сохранить/отмена
  contentAsterisk = document.getElementsByClassName("hideElement1");
  for (i = 0; i < contentAsterisk.length; i++) {
    contentAsterisk[i].style.visibility = "visible";
  }

  //image-profile1
  let imageElem = document.getElementsByClassName("image-profile1");

  for (i = 0; i < imageElem.length; i++) {

    imageElem[i].style.backgroundImage = 'url("img/Todarenco.jpg")';

  }


  let inputElem = document.getElementsByClassName("input-field1");
  for (i = 0; i < inputElem.length; i++) {
    inputElem[i].removeAttribute('disabled');// сделать активной  

    //стиль для input при редактировании
    inputElem[i].style.border = 'solid 2px #00BFFF';
    inputElem[i].style.borderBottom = 'solid 2px #00BFFF';
    inputElem[i].style.borderRadius = '5px';
    inputElem[i].style.color = '#000000';
    inputElem[i].style.backgroundColor = '#ffffff';

  }

  document.addEventListener('click', function (e) {
    var nameInput = document.getElementById('surname1');
    nameInput.value = "Тодаренко";

    var nameInput = document.getElementById('name1');
    nameInput.value = "Регина";

    var nameInput = document.getElementById('patronymic1');
    nameInput.value = "Петровна";

    var nameInput = document.getElementById('dob1');
    nameInput.value = "1990-06-14";

    var nameInput = document.getElementById('email1');
    nameInput.value = "Todor@mail.ru";

    var nameInput = document.getElementById('telephon1');
    nameInput.value = "";

    var nameInput = document.getElementById('pass1');
    nameInput.value = "ewq31adsd3";

    var nameInput = document.getElementById('rpass1');
    nameInput.value = "ewq31adsd3";

  }, false);



  //отключение видимости кнопки календаря
  let element = document.getElementById('dob');
  element.style['-webkit-calendar-picker-indicator'] = 'display: none;';
}


function buttonDelete(idField) {
  document.getElementById(idField).remove();
}

/*var el = document.getElementById('123');
el.parentNode.removeChild(el);


или так:
document.getElementById('123').parentNode.removeChild(document.getElementById('123'));
 */

function replaceType(idHide, idShow, element, type) {
  let elementReplace = document.getElementsByClassName(element);

  document.getElementById(idHide).style.display = "none";
  document.getElementById(idShow).style.display = "block";

  for (let i = 0; i < elementReplace.length; i++) {
    elementReplace[i].setAttribute('type', type); // сделать неактивной
  }


}

function changeBg(idTableItem, classTableItem) {

  let inputElem = document.getElementsByClassName(classTableItem);
  for (i = 0; i < inputElem.length; i++) {
    inputElem[i].style.backgroundColor = '';
    inputElem[i].style.border = '';
  }

  document.getElementById(idTableItem).style.backgroundColor = '#800080';
  document.getElementById(idTableItem).style.border = '2px solid #800080';
}
