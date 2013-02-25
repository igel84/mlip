$(document).ready(function () {
  
  $('#welcom img').each(function(){
    var href = $(this).attr('src').replace('content', 'original');
    var title = $(this).attr('alt');
    var rel = $(this).attr('class');
    $(this).wrap('<a href="'+href+'" class="fancybox" title="'+title+'" rel="'+rel+'"></a>');
  });

  $('#welcom .fancybox').fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'elastic',
    closeEffect: 'elastic',
    prevEffect: 'fade',
    nextEffect: 'fade',
  });

  $("a[rel=portfolio]").fancybox({
    'transitionIn'    : 'none',
    'transitionOut'   : 'none',
    'titlePosition'   : 'over'
  });

});