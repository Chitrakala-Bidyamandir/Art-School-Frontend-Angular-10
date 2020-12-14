function DOMOnLoad(){
  window.onscroll = function() {scrollFunction()};
  const scrollFunction = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.take-to-top').style.display = "flex"
    } else {
      document.querySelector('.take-to-top').style.display = "none"
    }
    // console.log(window.scrollY+'  '+window.innerHeight)    
  }

}
document.addEventListener('DOMContentLoaded',DOMOnLoad)