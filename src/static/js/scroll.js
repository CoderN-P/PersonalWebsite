window.addEventListener('load', AOS.refresh)
let prevScrollpos = window.scrollY;
let curscroll=0;
let prevScrollpos2 = window.scrollY;

$(document).on('scroll', function(){
       let h = $('#projects');

        var offset = h.offset();
        var width = h.width();



        var centerX = offset.left + width / 2;



       if (centerX >  $(window).width() / 2 || window.scrollY < prevScrollpos){
           curscroll = 0;
           h.css("left", Math.max(150 - 0.2 * window.scrollY, 1) + "vw");
           prevScrollpos = window.scrollY;
           const opacity = h.css('opacity');
           h.css('opacity', opacity/0.9);


       }else {

           var s = $(window).scrollTop(),
               d = $(document).height(),
               c = $(window).height();

           const opacity = h.css('opacity');
           if (window.scrollY < prevScrollpos2) {
               h.css('opacity', opacity/0.9);
           } else {
               h.css('opacity', opacity * 0.9);
           }



           var scrollPercent = ((window.scrollY - prevScrollpos) / (d - c)) * 100;

           h.css('top', 25 - scrollPercent + "%");

       }
       prevScrollpos2 = window.scrollY;
   });

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  $('#projects').css("left", "150vw");
}