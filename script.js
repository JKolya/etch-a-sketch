$( document ).ready(function() {
    
    size = $('#size').val();
    initGrid(size);

    $("#setSize").click(function(){
        size = $('#size').val();
        initGrid(size);
    });
    
    $("#clearGrid").click(function(){
        clearGrid();
        initGrid(size);
    });
});

function clearGrid() {
	$('#grid').empty();
}
function initGrid(size) {
  clearGrid();
	var gridSize = 500;
  var cellSize = gridSize / size;
  cellSize = cellSize + "px";
  for(var i = 0; i<size; i++) {
     for(var j = 0; j<size; j++) {
      var cell = $('<div class="cell"></div>');
      cell.css({'width':cellSize , 'height': cellSize});
      $("#grid").append(cell);
     }
   }
   $(".cell").hover(function() {
     		$(this).addClass("hover");
   	});
   
}
