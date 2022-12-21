
var yprev = 0;
var h = document.getElementsByTagName("header");

function onScroll() {
  if (screen.availWidth > 1024)
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
    console.log(screen.availWidth);
}

window.onscroll = onScroll();