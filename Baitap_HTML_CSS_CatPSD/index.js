
var yprev = 0;
var h = document.getElementsByTagName("header");

function onScroll() {
    window.addEventListener("scroll", () => {
    var y = window.scrollY;       
      if (y > yprev) {
        yprev = y;  
        h[0].style.display = "none";
    } 
      else if (y < yprev) {
        yprev =y;
        h[0].style.display = "block";
      }
    });   
}

window.onscroll = onScroll();