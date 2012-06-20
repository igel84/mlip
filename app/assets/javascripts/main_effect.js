$(document).ready(function () {

	$("ul.menu_news li:even").addClass("alt");
    
  $('img.news_head').click(function () {
		$('ul.menu_news').slideToggle('medium');
  });
	$('ul.menu_news li a').mouseover(function () {
		$(this).animate({ fontSize: "12px", paddingLeft: "10px" }, 50 );
  });
	$('ul.menu_news li a').mouseout(function () {
		$(this).animate({ fontSize: "12px", paddingLeft: "10px" }, 50 );
  });
              
  $("#right-menu li").prepend("<span></span>");
  $("#right-menu li").each(function() { 
  	var linkText = $(this).find("a").html(); 
    $(this).find("span").show().html(linkText);
  }); 
              
  $("#right-menu li").hover(function() {	
  	$(this).find("span").stop().animate({ 
    	marginTop: "-40"}, 250);} , function() { $(this).find("span").stop().animate({
      	marginTop: "0"}, 250);});
              
  $("#footer-menu li").prepend("<span></span>"); 
  $("#footer-menu li").each(function() { 
  	var linkText = $(this).find("a").html(); 
    $(this).find("span").show().html(linkText); 
  }); 
  $("#footer-menu li").hover(function() {	
  	$(this).find("span").stop().animate({ 
    	marginTop: "-30"}, 250);} , function() { 
    		$(this).find("span").stop().animate({
    			marginTop: "0"}, 250);             
    });
  slide("#sliding-navigation", 32, 20, 150, .8);

function slide(navigation_id, pad_out, pad_in, time, multiplier)
{
	var list_elements = navigation_id + " li.sliding-element";
	var link_elements = list_elements + " a";
	
	// initiates the timer used for the sliding animation
	var timer = 0;
	
	$(list_elements).each(function(i)
	{
		$(this).css("margin-left","-30px");
		timer = (timer*multiplier + time);
		$(this).animate({ marginLeft: "0" }, timer);
		$(this).animate({ marginLeft: "15px" }, timer);
		$(this).animate({ marginLeft: "0" }, timer);
	});

	$(link_elements).each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingLeft: pad_out }, 150);
		},		
		function()
		{
			$(this).animate({ paddingLeft: pad_in }, 150);
		});
	});
}
	$("ul.menu_body li:even").addClass("alt");
    $('img.menu_head').click(function () {
	$('ul.menu_body').slideToggle('medium');
    });
	$('ul.menu_body li a').mouseover(function () {
	$(this).animate({ fontSize: "12px", paddingLeft: "10px" }, 50 );
    });
	$('ul.menu_body li a').mouseout(function () {
	$(this).animate({ fontSize: "12px", paddingLeft: "10px" }, 50 );
    });
});














