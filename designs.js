

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  //gets the values of width, height and color as set by the user at the time of clicking submit
  let width = document.getElementById('inputWidth');
  let height = document.getElementById('inputHeight');
  let color = document.getElementById('colorPicker');
  //creates table with the number of rows and columns decided by user
  document.getElementById('unimp').innerHTML = '<table>'+('<tr>' +('<td></td>'.repeat(width.value))+'</tr>').repeat(height.value)+'</table>'+ '<button id = resetButton onclick = reSet()>Reset</button>'+'<button id = resetButton onclick = clearGrid()>Submit</button>';
//sets the color of all pixels to white
document.querySelectorAll('td').forEach(item => {
  item.style.backgroundColor = 'white';
})
//adds EventListener to each pixel and toggles between white and color.value every time pixel is clicked ( need to double click first time and then single click works ( I could not figure out why))
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

//function to clear the Grid of any color

function clearGrid(){
  document.querySelectorAll('td').forEach(item => {
    item.style.backgroundColor = 'white';
}
)};
//function to take user back to home screen where users can choose the grid size again
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
