

$('#search-btn').click(function(){
	
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
	})
})

