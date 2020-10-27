
//const tableCodeStart = "<table>";
//const tableCodeEnd = "</table>";
//const gridLengthCodeStart = "<tr>";
//const gridLengthCodeEnd = '</tr>';
//const gridWidthCode = "<td></td>";

function checkColor (item, color){
  if (item.style.backgroundColor=== 'white') {
    item.style.backgroundColor=color.value;
  }
  else{
    item.style.backgroundColor = 'white';
  }
};
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let width = document.getElementById('inputWidth');
  let height = document.getElementById('inputHeight');
  let color = document.getElementById('colorPicker');
  document.getElementById('unimp').innerHTML = '<table>'+('<tr>' +('<td></td>'.repeat(width.value))+'</tr>').repeat(height.value)+'</table>'+ '<button id = resetButton onclick = reSet()>Reset</button>';
  //for (i = 0; i<height.value; i++){
  //document.getElementById('unimp').innerHTML += '<tr>';
  //document.getElementById('unimp').innerHTML += '<td></td>'.repeat(width.value);
  //document.getElementById('unimp').innerHTML += '</tr>';
  //document.getElementById('unimp').innerHTML += '<br>';
//  }
//  document.getElementById('unimp').innerHTML += '</table>';
  //document.querySelectorAll('.thegrid').forEach(item => {
  //item.addEventListener('mousedown', event => checkColor(item, color.value))});
//document.getElementById('unimp').innerHTML += "<button type = 'button' onclick='reSet()' id = 'resetButton'>Reset</button>";
document.querySelectorAll('td').forEach(item => {
  item.addEventListener('click', event =>{ if (item.style.backgroundColor == 'white'){
      item.style.backgroundColor = color.value;
    }
    else {
      item.style.backgroundColor = 'white';
    }
});
});


};

function reSet() {
  document.getElementById('unimp').innerHTML = "<div id = 'unimp'>\
<h2>Choose Grid Size</h2>\
  <form id='sizePicker'>\
      Grid Height:\
      <input type='number' id='inputHeight' name='height' min='1' value='1'>\
      Grid Width:\
      <input type='number' id='inputWidth' name='width' min='1' value='1'>\
      <input type='submit' onclick='makeGrid()'>\
  </form>\
  <h2>Pick A Color</h2>\
  <input type='color' id='colorPicker'>\
  <h2>Design Canvas</h2>\
  <table id='pixelCanvas'></table>\
</div>";
};
