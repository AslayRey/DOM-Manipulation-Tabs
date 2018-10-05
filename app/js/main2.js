$(document).ready(function(){
    $(".tabs_list a").click(function(){
        $(this).tab('show');
    });
});


(function($) {
    var allPanels = $('.accordion > dd').hide();  
    $('.accordion > dt > a').click(function() {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      return false;
    });
})(jQuery);