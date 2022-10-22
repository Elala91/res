let menu=document.getElementById("nav-icon");
menu.addEventListener("click",showMenu);
function showMenu() {
    var x = document.getElementById("minmenu");
    x.style.display = "block";
     }
  window.onscroll = function() {changeColor()};
  function changeColor() {
    if (document.documentElement.scrollTop > 150) {
      document.getElementById("Black").style.backgroundColor="black";
      }
    else{document.getElementById("Black").style.backgroundColor="transparent";}
  }