  window.onscroll = function() {scrollFunction()};
  const scrollFunction = function(){
    var nav = document.querySelector('nav')
    var line = document.querySelectorAll('.line')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.take-to-top').style.display = "flex"
      nav.style.backgroundColor = "#ffefe1"
      line[0].style.backgroundColor=line[1].style.backgroundColor=line[2].style.backgroundColor = nav.style.color = "#FF5722"
    } else {
      document.querySelector('.take-to-top').style.display = "none"
      nav.style.backgroundColor = "#ffefe1"
      // line[0].style.backgroundColor = line[1].style.backgroundColor = line[2].style.backgroundColor = nav.style.color = "#fff"
    }
    // console.log(window.scrollY+'  '+window.innerHeight)    
  }
 function swiper_call() {
    var swiper = new Swiper('.swiper-container',{
      autoplay:{
        
      }
    });
  }
 


exports.set_swiper = swiper_call