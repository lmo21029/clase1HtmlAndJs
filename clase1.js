'use strict';

let count = 0;

function countFunction() {
  count = count + 1;
  const countElement = document.getElementById('countValue');
  countElement.textContent = count;
}

function resetButton() {
  count = 0;
  document.getElementById('countValue').textContent = count;
  document.getElementById('field1').value = null;
  document.getElementById('field2').value = null;
}

function sumFunction() {
  const a = document.getElementById('field1').value;
  const b = document.getElementById('field2').value;

  const result = Number(a) + Number(b);
  document.getElementById('countValue').textContent = result;
}

// const countFunction = (() => {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//     // document.getElementById("countValue").textContent = count;
//   };
// })();
