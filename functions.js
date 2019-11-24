//High order functions and callbacks

// a function that receive any function as arguments is called HIGH ORDER Function
// function which was passed as an argument to previoulsy function is called as CALLBACK FUNCTION
function add(x) {
  console.log(x + 5);
}

function hoc(x, callback) {
  return callback(x);
}

hoc(10, add);
