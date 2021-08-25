// SCROOOOLLL MAGIC //
  
var controller = new ScrollMagic.Controller({vertical: false });

function getwindowWidth(slow){
	var windowWidth = window.innerWidth
	return (windowWidth * slow)
}
	
// ADD CLASS ACTIVE TO SECTION
$('section').each(function(){
	var sectionWidth = $(this).width()
    	var href = $(this).attr('id')
    	var animEl = "[anchor="+href+"]"
    	var scrollBar = "[anchor="+href+"] .scrollbar"
    

    	var tween = TweenMax.staggerFromTo(scrollBar, 1, 
    	{scaleX: 0 }, {scaleX: 1});
	
    	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 0.50,
        	duration: sectionWidth,
    		reverse : true,
    		offset:0
  	}) 
    	.setClassToggle(animEl, "active")
    	.setTween(tween)
    	.addTo(controller)
})


/******************
    INTRO
*******************/
var timeline = new TimelineMax();
    
var tween1 = TweenMax.fromTo("header",
{ y:'-100%', duration:0.3, ease: Power3.easeIn},
{ y:'0%', duration:0.3, ease: Power3.easeOut});

var tween2 = TweenMax.fromTo("header *",
{ y:'-100%', opacity:0, duration:0.3, ease: Power3.easeIn},
{ y:'0%', opacity:0, duration:0.3, ease: Power3.easeOut});
    
var tween3 = TweenMax.fromTo(".navbar",
{ y:'100%', duration:0.4, ease: Power3.easeIn},
{ y:'0%', duration:0.4, ease: Power3.easeOut});

var tween4 = TweenMax.fromTo(".nav-link",
{ y:'100%', opacity:0, duration:0.2, stagger: 0.1, ease: Power3.easeIn},
{ y:'0%', opacity:1, duration:0.2, stagger: 0.1, ease: Power3.easeOut});


timeline
.add(tween1,0)
.add(tween2,0.3)
.add(tween3,0)
.add(tween4,0.3)

var scene = new ScrollMagic.Scene({
  		triggerElement: "#agence-section", 
   		triggerHook : 0.98,
   		reverse : true,
})
.setTween(timeline)
.addTo(controller)


/******************
    AGENCE
*******************/
// BLOCK IMAGE INTRO
var tween = TweenMax.staggerFromTo("#block-image-intro", 1, 
    {backgroundSize: "auto 160%"}, 
    {backgroundSize:"auto 100%"});

var scene = new ScrollMagic.Scene({
   triggerElement: '#block-image-intro', 
   duration: getwindowWidth(1.5),
   triggerHook : 1,
   reverse : true,
   offset:0
})
.setTween(tween)
.addTo(controller)


// NOS METIER
var timeline = new TimelineMax();
    
var tween0 = TweenMax.fromTo("#block-title--metier",
{ width:'35vw', duration:0.4, ease: Power3.easeOut},
{ width:'10vw', duration:0.4, ease: Power3.easeOut});
    
var tween1 = TweenMax.fromTo("#subtitle-text",
{ opacity:0, duration:0.4, ease: Power3.easeOut},
{ opacity:1, duration:0.4, ease: Power3.easeOut});

timeline
.add(tween0,0)
.add(tween1,0.4)

var scene = new ScrollMagic.Scene({
  		triggerElement: "#block-title--metier", 
   		triggerHook : 0.65,
   		reverse : true,
})
.setTween(timeline)
.addTo(controller)



/******************
     LES OFFRES
*******************/

// BLOCK WORDS ACTIV 
var tween = TweenMax.staggerFromTo('.verticale-word', 1, 
{yPercent: 75 },{yPercent: -75 }, 0.2);

var scene = new ScrollMagic.Scene({
	triggerElement: "#vertical-section-words",
	triggerHook : 1,
  	duration : getwindowWidth(1.4)
})
.setTween(tween)
.addTo(controller)



// BLOCK IMG (CACH) 
var tween = TweenMax.from("#verticale-img-block .cach-image",0.4,
	{scaleY:"100%"},0);
			  
var scene = new ScrollMagic.Scene({
	triggerElement: "#verticale-img-block",
	triggerHook : 0.75
})     
.setTween(tween) 
.addTo(controller)


$(".metier-list--dot").each(function(){
	var tween = TweenMax.from(this, 1, 
	{scale:0 , duration:200, ease:Power2.easeOut  });
    
	var scene = new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook : 0.85,
      		reverse : false,
	})
	.setTween(tween)
	.addTo(controller)
})

$(".metier-list--text-wrapper").each(function(){
	var cachTitle = $(this).find(".cach-title")
	var number= $(this).find(".metier-list--number")

	var timeline = new TimelineMax();
    
    	var tween0 = TweenMax.from(cachTitle,
   	{ scaleX:1, duration:0.6, ease: Power3.easeOut});
    
    	var tween1 = TweenMax.from(number,
   	{ opacity:0, duration:0.4, ease: Power3.easeOut});
      
 	timeline
    	.add(tween0,0)
    	.add(tween1,0.4)
    
    	var scene = new ScrollMagic.Scene({
  		triggerElement: this, 
   		triggerHook : 0.85,
   		reverse : true,
	})
    	.setTween(timeline)
    	.addTo(controller)
})

$('.metier-list--title').mouseenter(function(){
	var letter = $(this).find('.letter')
  
	var t1 = new TimelineMax({paused:true});
  	t1.to(letter, 0.1,
  	{skewX: "16deg", y:-100, x:20, stagger:0.05, ease: Power4.easeIn},0);
      
  	t1.to(letter, 0, 
  	{y: 100, x:-20, opacity:0} ) 
      
  	t1.to (letter , 0.1 ,
  	{skewX: "0deg", y:0, x:0, opacity:1, stagger:0.05 , ease: Power4.easeOut})
    
  	t1.play()
})

	
/******************
     CREATION
*******************/
/* IMGS PROJECT PRLX */
	
$('.image-project').each(function(){ 
	var tween = TweenMax.staggerFromTo(this, 1, 
	{xPercent: 15, scale:1.3}, {xPercent: -15, scale:1.3});

	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 1,
    		reverse : true,
      		duration: getwindowWidth(1.4)
  	}) 
    	.setTween(tween)
	.addTo(controller)
})

$(".project-item.link-box").each(function(){
	var titleProject = $(this).find(".cach-title")
  	var infoProject = $(this).find(".short-description-project")
  	var cachImg = $(this).find(".cach-image")

	var timeline = new TimelineMax();
    
    	var tween0 = TweenMax.from(titleProject,
   	{ scaleX:1, duration:0.6, ease: Power3.easeOut});
    
    	var tween1 = TweenMax.from(infoProject,
   	{ opacity:0, duration:0.8, ease: Power3.easeOut});
      
	var tween2 = TweenMax.from(cachImg,
    	{scaleY:1, duration:0.6, ease: Power3.easeOut});
      
 	timeline.
    	add(tween0,0.2)
    	.add(tween1,0.4)
    	.add(tween2,0)

	var scene = new ScrollMagic.Scene({
		triggerElement: this, 
		triggerHook : 0.9,
		reverse : false,
	})
	.setTween(timeline)
	.addTo(controller)
})


/**********
ACTU
***********/

$('.actu-item').each(function(){     
	var date = $(this).find(".actus-date")
    	var title = $(this).find(".cach-title")
    	var paragraph = $(this).find(".actus-paragraph")

	var timeline = new TimelineMax();
    
    	var tween0 = TweenMax.from(date,
   	{ opacity:0, duration:0.6, ease: Power3.easeOut});
    
    	var tween1 = TweenMax.from(title,
   	{ scaleX:1, duration:0.6, ease: Power3.easeOut});
    
    	var tween2 = TweenMax.from(paragraph,
   	{ opacity:0, duration:0.6, ease: Power3.easeOut});
      
      
 	timeline.
    	add(tween0,0.3)
    	.add(tween1,0)
    	.add(tween2,0.5)
    
	
    	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 1,
    		reverse : true,
      		duration: getwindowWidth(1.4)
  	}) 
    	.setClassToggle(this, "active") 
	.addTo(controller)
})



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
    } else{}

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


$('.block-text.anim1').each(function(){ 	
    	var rowSeparator = $(this).find('.separator');
    	var titleBlockLetter = $(this).find('.title-section .letter');
    	var linkBlock = $(this).find('.link-wrapper');

    
 	var timeline = new TimelineMax();
        
    	var tween1 = TweenMax.from(titleBlockLetter, 0.4,
    	{x:100, skewX:'-10deg', stagger:0.02, opacity:0, ease:Power2.easeOut});
	
	var tween2 = TweenMax.from(rowSeparator, 0.8,
   	{ scaleX:0, ease: Power3.easeOut});
    
     	var tween3 = TweenMax.from(linkBlock, 0.4,
    	{scale:0, ease: Power3.easeOut});
      
 	timeline
	.add(tween1,0)
    	.add(tween2,0.4)
    	.add(tween3,0.2)
         
	var scene = new ScrollMagic.Scene({
  		triggerElement: this,
    		triggerHook : 0.75,
    		reverse : false,
  	}) 
    	.setTween(timeline)
	.addTo(controller)
})

