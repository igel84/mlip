$(document).ready(function () {
  
  $('#welcom img').each(function(){
    var href = $(this).attr('src').replace('content', 'original');
    var title = $(this).attr('alt');
    $(this).wrap('<a href="'+href+'" class="fancybox" title="'+title+'"></a>');
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
});