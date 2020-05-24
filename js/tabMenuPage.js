function openMenuPage(pageName,nametabcontent,namemenu, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(nametabcontent);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName(namemenu);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.border = "";
      
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    if(namemenu === 'item-role') {
      elmnt.style.border = 'solid 2px #800080';	
    }
    if(namemenu === 'numer') {
      elmnt.style.border = 'solid 1px #ffffff';	
    }
    //
      //tablinks[i].style.borderBottom ='solid 2px #00BFFF';
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpenMenu").click();
  document.getElementById("defaultOpenRole").click();
  document.getElementById("defaultOpenItemTable").click();