chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(arr,elem) {
  return [elem,...arr];
}


function destructivelyAddElementToBeginningOfArray(arr,elem) {
  arr.unshift(elem);
}


function addElementToEndOfArray(arr,elem) {
  return [...arr,elem];
}


function destructivelyAddElementToEndOfArray(arr,elem) {
  arr.push(elem);
}


function accessElementInArray(arr,idx) {
  return arr[idx];
}


function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
}


function removeElementFromBeginningOfArray(arr) {
  arr.slice(0,1);
}


function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
}


function removeElementFromEndOfArray(arr) {
  arr.slice(arr.length-1);
}

