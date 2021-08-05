//Подстроиться под высоту окна браузера
function setHeiHeight() {
  $('.head-img').css({
    height: $(window).height() - 90 + 'px'
  });
}
setHeiHeight();
$(window).resize( setHeiHeight );

//скрыть родительский блок, если дочерние отсутствуют
$('#mother').each(function () {
    var showElement = false;
    $(this).find('a.bacf').each(function () {
        var len = $.trim($(this).html()).length;
        if (len > 0) {
            showElement = true;
        }
    });
    if (showElement === false) {
        $(this).hide();
    } else {
        $(this).show();
    }
});

//всплывающая форма
$.fn.popup = function() {  //функция для открытия всплывающего окна
 this.css('position', 'absolute').fadeIn();
 this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
 this.css('left', ($(window).width() - this.width()) / 2  + 'px');
 $('.backpopup').fadeIn();
}
$(document).ready(function(){
 $('.open').click(function(){
  $('.popup-window').popup();
 });
 $('.backpopup,.close').click(function(){
  $('.popup-window').fadeOut();
  $('.backpopup').fadeOut();
 });
});

//выпадающий текст
$(document).ready(function(){
$(".btn-slide").click(function(){
$("#panel").slideToggle("slow");
$(this).toggleClass("active"); return false;
});
});
$(function(){
    $('.deschidden').each(function(){
        $(this).click(function(){
            $(this).siblings('.desc').slideToggle(300);            
        });        
    });                
});

/* ==============================================
Бегущие цифры
=============================================== */

var time = 2,
  cc = 1;
jQuery(window).scroll(function() {
  jQuery('#counter').each(function() {
    var
      cPos = jQuery(this).offset().top,
      topWindow = jQuery(window).scrollTop();
    if (cPos < topWindow + 700) {
      if (cc < 2) {
        jQuery(".counts-big").addClass("viz");
        jQuery('div').each(function() {
          var
            i = 5,
            num = jQuery(this).data('num'),
            step = 1000 * time / num,
            that = jQuery(this),
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

//закрыть меню при клике вне его
const btnMenu = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const toggleMenu = function() {
    menu.classList.toggle('open');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('open');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});
