function buttonCancel() {
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

  let inputElem = document.getElementsByClassName("input-field");
    for (i = 0; i < inputElem.length; i++) {
      inputElem[i].setAttribute('disabled', 'disabled'); // сделать неактивной     

      //стиль input при просмотре
      inputElem[i].style.border = 'solid 2px #800080';	
      inputElem[i].style.borderBottom ='solid 2px #00BFFF';
      inputElem[i].style.borderRadius ='0px';
      inputElem[i].style.color ='#ffffff';
      inputElem[i].style.backgroundColor ='#800080';
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
      inputElem[i].style.borderBottom ='solid 2px #00BFFF';
      inputElem[i].style.borderRadius ='5px';
      inputElem[i].style.color ='#000000';
      inputElem[i].style.backgroundColor ='#ffffff';

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

function replaceType(idHide,idShow,element,type) {
  let elementReplace = document.getElementsByClassName(element);
  
  document.getElementById(idHide).style.display = "none";
  document.getElementById(idShow).style.display = "block";

  for( let i = 0; i< elementReplace.length; i++ ) {
    elementReplace[i].setAttribute('type', type); // сделать неактивной
  }
  //elementReplace[i].removeAttribute('type');// сделать активной 
  //elementReplace.setAttribute('type', setType); // сделать неактивной


}
