

function twoDimensionArray(a, b) {
  let arr = [];

  // creating two dimensional array
  for (let i = 0; i < a; i++) {
    arr[i] = [];
    for (let j = 0; j < b; j++) {
      arr[i][j] = prompt(`Enter value for arr[${i}][${j}]`);
    }
  }

  // displaying the array
  console.log("Original Array:");
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
    }
  }

  // changing an element in the array
  let row = prompt("Enter row number to change element:");
  let col = prompt("Enter column number to change element:");
  let val = prompt(`Enter new value for arr[${row}][${col}]:`);
  arr[row][col] = val;

  // displaying the updated array
  console.log("Updated Array:");
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
    }
  }
}

// calling the function
twoDimensionArray(2, 3);
