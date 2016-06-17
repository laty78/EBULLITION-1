$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#change');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").css('background-color', '#f0f0f0');
       } else {
          $('.navbar-inverse').css('background-color', 'transparent');
       }
   });
    }
});