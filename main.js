// Ex 1, 2 START
var arrayOutput = document.getElementById('new');
var array = [3, 6, 7, 8, 11];
arrayOutput.innerHTML = array.join(', ');

// ok
document.getElementById('btn-ok').onclick = ok;

// array output
function ok() {
  var newIndexValue = document.getElementById('value').value;
  var index = document.getElementById('index').value;
  array[index] = newIndexValue;
  arrayOutput.innerHTML = array.join(', ');
}
// EX 1, 2 END

// Ex 3, 4, 5, 6 START

// pop
actions.innerHTML = array.join(', ');
function popNumber() {
	var actions = document.getElementById('actions');
	array.pop();
	actions.innerHTML = array.join(', ');
}

// shift
function shiftNumber() {
	var actions = document.getElementById('actions');
	array.shift();
	actions.innerHTML = array.join(', ');
}

// push
function pushNumber() {
  var newIndexValue = document.getElementById('value').value;
	var actions = document.getElementById('actions');
	array.push(newIndexValue);
	actions.innerHTML = array.join(', ');
  console.log(array);
}

// unshift
function unshiftNumber() {
  var newIndexValue = document.getElementById('value').value;
	var actions = document.getElementById('actions');
	array.unshift(newIndexValue);
	actions.innerHTML = array.join(', ');
}
