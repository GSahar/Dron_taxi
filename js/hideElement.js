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
}
    //input-sex-text
    //group-check-sex

    /*for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "block";
    }*/
  
    // Remove the background color of all tablinks/buttons
   /* tablinks = document.getElementsByClassName("tablink-menu");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;*/
  //}
  
  // Get the element with id="defaultOpen" and click on it
  /*document.getElementById("defaultOpenMenu").click();*/