let prevScrollpos = window.scrollY;
$(document).on('scroll', function(){
       let h = $('#projects');
        var offset = h.offset();
        var width = h.width();

        console.log(window.scrollY, prevScrollpos);

        var centerX = offset.left + width / 2;

       if (centerX >  $(window).width() / 2 || window.scrollY < prevScrollpos){
           h.css("left", Math.max(150 - 0.2 * window.scrollY, 1) + "vw");
           prevScrollpos = window.scrollY;

       }
   });

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  $('#projects').css("left", "150vw");
}