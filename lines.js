

$(document).ready(function() {
//init
//$('#svgbasics').svg({onLoad: drawlines})
	
	drawlines();
	
$("#clear").click(function(){
  //$('#svgbasics').svg('get').clear()
  $('#svgbasics').svg('destroy');
})

$("#redraw").click(function(){
  $('#svgbasics').svg('destroy');
  drawlines()
})
	
	 $("#let").click(function(e){
      $('#status2').html(e.pageX +', '+ e.pageY);
   });


	$('#svgmove').svg({onLoad: function(svg){
	var g = svg.group({stroke: 'black', 'stroke-width': 1});
	
    var line= svg.line(g, 23, 23+10, 99, 90);
     
    $("#svgmove").mousemove(function(event) {
     
     svg.change(line, {svgx2: event.pageX});
     
  })
}})

	
	});
	
	function drawlines() {
	$('#svgbasics').svg({onLoad: function(svg){
	      var g = svg.group({stroke: 'black', 'stroke-width': 1});
	      var x,y,x1,x2;	
	        for (var i in pd._graph.objects) {
	          for (var o in pd._graph.objects[i].outlets) {
	          //var from_y=pd._graph.objects[i].y+10;
	               	svg.line(g,  pd._graph.objects[i].x,  pd._graph.objects[i].y, pd._graph.objects[i].outlets[o][0].x, pd._graph.objects[i].outlets[o][0].y);
	               	}
	        }		
  	}
	})
	}
