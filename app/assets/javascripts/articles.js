$(document).ready(function () {
  
  $('#welcom img').each(function(){
    var href = $(this).attr('src');
    $(this).wrap('<a href='+href+' class="fancybox"></a>');
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