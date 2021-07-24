initScrollMagic()

function initScrollMagic(){   
    var controller = new ScrollMagic.Controller({
  	vertical: false,   
});


function getwindowWidth(slow){
	var windowWidth = window.innerWidth
	return (windowWidth * slow)
}
// ADD CLASS ACTIVE TO SECTION
$('section').each(function(){
	var sectionWidth = $(this).innerWidth()
    	var href = $(this).attr('id')
    	var animEl = "[anchor="+href+"]"
   	var scrollBar = "[anchor="+href+"] .scrollbar"
    

    	var tween = TweenMax.staggerFromTo(scrollBar, 1, 
    	{scaleX: 0 }, {scaleX: 1});
	
    	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 0.55,
       		duration: sectionWidth,
    		reverse : true,
    		offset:0
  	}) 
    	.setClassToggle(animEl, "active")
    	.setTween(tween)
    	.addTo(controller)
})

/******************
    AGENCE
*******************/

// BLOCK IMAGE INTRO
var tween = TweenMax.staggerFromTo("#block-image-intro", 1, 
    {backgroundSize: "auto 130%"}, 
    {backgroundSize:"auto 100%"});

var scene = new ScrollMagic.Scene({
   triggerElement: '#block-image-intro', 
   duration: getwindowWidth(2),
   triggerHook : 1,
   reverse : true,
   offset:0
})
.setTween(tween)
.addTo(controller)


// Block metier resize
var tween = TweenMax.fromTo("#block-title--metier", 1,
	{width: "50vw"},
	{width: "10vw", ease: Circ.easeInOut}
);
var scene = new ScrollMagic.Scene({
	triggerElement: "#block-title--metier", 
	duration: 200, 
	triggerHook:0.5
})
.setTween(tween)
.addTo(controller);

// Block metier sticky

/******************
     VERTICALE
*******************/



// BLOCK IMG ACTIV 
var scene = new ScrollMagic.Scene({
	triggerElement: "#verticale-img-block",
	triggerHook : 0.75
})     
.setClassToggle("#verticale-img-block", "visible") 
.addTo(controller)



/******************
     CREATION
*******************/
// BLOC IMG PROJET

$('.project-item').each(function(){     
	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 0.8,
    		reverse : true,
    		offset:0
  	}) 
    	.setClassToggle(this, "active") 
	.addTo(controller)
})

var tween = TweenMax.staggerFromTo(".image-project", 1, {
    xPercent: 15, 
    scale:1.3
}, {
    xPercent: -15, 
    scale:1.3
});

var scene = new ScrollMagic.Scene({
   triggerElement: '.project-list-wrapper', 
   duration: getwindowWidth(2),
   triggerHook : 1,
   reverse : true,
   offset:0
})
.setTween(tween)
.addTo(controller)


$('.actu-item').each(function(){     
	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 0.8,
    		reverse : true,
    		offset:0
  	}) 
    	.setClassToggle(this, "active") 
	.addTo(controller)
})


/*** GENERAL ****/

// PARRALAX ANIM 
$('[parallax-anim]').each(function(){
	var distance = $(this).attr("parallax-anim")
    	var animEl = $(this).find("[direction]")
   	var speed = animEl.attr("scroll-speed")
    	var direction = animEl.attr("direction")
    	var type = animEl.attr("type-anim")
    
    	if (type = "translation") {
    		if (direction == 'horizontal'){    
    			var tween = TweenMax.staggerFromTo(animEl, 1, 
    			{xPercent: distance }, {xPercent: -distance});      
    		} else if (direction =='vertical'){
    			var tween = TweenMax.staggerFromTo(animEl, 1, 
    			{yPercent: distance * speed }, {yPercent: -distance * speed});
   	 	} else {}
    	} else {}

	var scene = new ScrollMagic.Scene({
  		triggerElement: this, 
    		duration: getwindowWidth(2),
    		triggerHook : 1,
    		reverse : true,
    		offset:0
  	}) 
    	.setTween(tween)
    	.addTo(controller)
}) 

// [reveal ANIM ] 
$('[reveal-anim]').each(function(){
	var hook = $(this).attr("reveal-anim")     
	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : hook,
    		reverse : false,
    		offset:0
  	}) 
   	.setClassToggle(this, "visible") 
	.addTo(controller)
})


					
