
// When size is submitted by the user, call makeGrid()
function makeGrid() {

  //gets the values of width, height and color as set by the user at the time of clicking submit
  let width = document.getElementById('inputWidth');
  let height = document.getElementById('inputHeight');
  let color = document.getElementById('colorPicker');
  //creates table with the number of rows and columns decided by user
  document.getElementById('unimp').innerHTML = '<table id ="myTable">'+('<tr>' +('<td></td>'.repeat(width.value))+'</tr>').repeat(height.value)+'</table>'+ '<button class = resetButton onclick = reSet()>Reset</button>'+'<button class = resetButton onclick = clearGrid()>Submit</button>';
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


//function to take user back to home screen where users can choose new grid size again
function reSet() {
  location.reload();
};
