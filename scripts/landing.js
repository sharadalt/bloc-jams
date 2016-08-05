      var animatePoints = function() {
 
                 var points = document.getElementsByClassName('point');
 
                 var revealPoints = function(pt) {
                     points[pt].style.opacity = 1;
                     points[pt].style.transform = "scaleX(1) translateY(0)";
                     points[pt].style.msTransform = "scaleX(1) translateY(0)";
                     points[pt].style.WebkitTransform = "scaleX(1) translateY(0)";
                 };
        
                 for(var i=0; i <points.length; i++){
	               revealPoints(i);
                 }
        
                
      };