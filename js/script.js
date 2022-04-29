
$(document).ready(function() {
    $('.header__burger').click(function(event) {
       $('.header__burger,.header__menu').toggleClass('active');
       $('body').toggleClass('lock');
    });
});


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});






const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');



openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});


const openPopUpz = document.getElementById('open_pop_upz');
const closePopUpz = document.getElementById('pop_upz_close');
const popUpz = document.getElementById('pop_upz');



openPopUpz.addEventListener('click', function(e){
    e.preventDefault();
    popUpz.classList.add('active');
})

closePopUpz.addEventListener('click', () => {
    popUpz.classList.remove('active');
})