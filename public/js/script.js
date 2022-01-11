function openNav() {
  document.getElementById("navbarNav1").style.width = "300px";
}

function closeNav() {
  document.getElementById("navbarNav1").style.width = "0";
}


$(document).ready(function() {

   $("#owl-demo").owlCarousel({
     items :2, //10 items above 1000px browser width
     itemsDesktop : [1024,2], //5 items between 1000px and 901px
	 itemsDesktopSmall : [768,2], // 3 items betweem 900px and 601px
	 itemsTablet: [767,2], //2 items between 600 and 0;
	 itemsMobile : [580,2], // itemsMobile disabled - inherit from itemsTablet option      
	 navigation: true	  
 	});
	$("#owl-demo1").owlCarousel({
     items :3, //10 items above 1000px browser width
     itemsDesktop : [1024,3], //5 items between 1000px and 901px
	 itemsDesktopSmall : [768,2], // 3 items betweem 900px and 601px
	 itemsTablet: [767,1], //2 items between 600 and 0;
	 itemsMobile : [580,1], // itemsMobile disabled - inherit from itemsTablet option      
	 navigation: true	  
 	});
	
});


