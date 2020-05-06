function buttonSave() {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;

    /*tabcontent = document.getElementsByClassName("button-edit");
    tabcontent[i].style.display = "block";*/

    
    document.getElementById("button-edit").style.visibility = "visible";
    document.getElementById("input-sex-text").style.display = "block";
    document.getElementById("group-check-sex").style.display = "none";
}

/*функция вызываемая при нажатии кнопки редактирования */
function buttonEdit() {
    //кнопка редактирования
    document.getElementById("button-edit").style.visibility = "hidden";
    //поле для вывода пола
    document.getElementById("input-sex-text").style.display = "none";


    //кнопка обновитить фотографию
    document.getElementById("image-update").style.visibility = "visible";  
    //группа чекбоксов для определения пола
    document.getElementById("group-check-sex").style.display = "block";    
    //группа кнопок сохранить/отмена
    document.getElementById("group-button").style.visibility = "visible";
    
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