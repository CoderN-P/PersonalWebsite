let prevScrollpos = window.scrollY;
let curscroll=0;
$(document).on('scroll', function(){
       let h = $('#projects');
        var offset = h.offset();
        var width = h.width();

        console.log(window.scrollY, prevScrollpos);

        var centerX = offset.left + width / 2;



       if (centerX >  $(window).width() / 2 || window.scrollY < prevScrollpos){
           curscroll = 0;
           h.css("left", Math.max(150 - 0.2 * window.scrollY, 1) + "vw");
           prevScrollpos = window.scrollY;

       }else{

           var s = $(window).scrollTop(),
              d = $(document).height(),
              c = $(window).height();

           var scrollPercent = ((window.scrollY-prevScrollpos) / (d - c)) * 100;

           h.css('top', 20-scrollPercent+"%");
            curscroll += s-prevScrollpos;
            console.log(curscroll);
           if (s < 860) {
               if (curscroll + prevScrollpos < 860) {
                   if (80 < curscroll) {
                       document.getElementById('neb').src = '/static/images/nebulus2.png';
                   } else {
                       document.getElementById('neb').src = '/static/images/nebulus.png';
                   }
                   window.scrollTo(0, prevScrollpos);
               }
           }
       }
   });

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  $('#projects').css("left", "150vw");
}