
$('#search-btn').click(function(){
	$('body').css("overflow-y","hidden")
	var t1 = new TimelineMax({paused:true});
  	t1.to('#search-transition-block', 0,
  		{opacity: 1});
      
  	t1.to('#search-transition-block', 0.7, 
   		{scale:70, ease: Power3.easeInOut})
    
    	t1.to('#search-wrapper', 0,
  		{display:'block'},0)
      
  	t1.to('#search-wrapper' , 0.5 ,
  		{opacity:1,ease: Power3.easeInOut},0.5)
    
  	t1.play()
  
  	$("#exit-search").click(function(){
		t1.reverse();
		$('body').css("overflow-y","scroll")
	})
})

function animNavRs(){
	$(".rs-block.nav").mouseenter(function(){
		var letter = $(this).find(".letter")
  
  		var t1 = new TimelineMax({paused:true});
		t1.fromTo(letter, 0.1,
  		{skewX: "0deg", y:0, opacity:1},
    		{skewX: "16deg", y:-15, opacity:0, stagger:0.03, ease: Power4.easeIn},0);
      
  		t1.fromTo (letter , 0.1 ,
    		{skewX: "0deg", y:15, opacity:0},
  		{skewX: "0deg", y:0, opacity:1, stagger:0.03 , ease: Power4.easeOut})
    
  		t1.play()
	})
}

