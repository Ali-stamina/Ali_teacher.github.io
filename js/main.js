
  document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        
        loop: true, 
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },
        speed: 800, 
        effect: 'slide', 
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
                navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
breakpoints: {
   768: {
    height: 300 
     },
            
  480: {
    height: 200 
    }
     }
    });
});
