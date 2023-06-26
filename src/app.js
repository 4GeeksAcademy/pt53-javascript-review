/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const ouput = document.querySelector("#output");

  const sumToNumber = (n) => {
    // let total = 0;
    // for (let i = 0; i <= n; i++) {
    //   total += i;
    // }
    // return total;

    return (n * (n + 1)) / 2;
  };

  // output.innerHTML = JSON.stringify(sumToNumber(100));

  `1 2 3 4 5  6  7  8  9  10 11 12
   2 4 6 8 10 12 14 16 18 20 22 24
   ...
  `;

  const multiTable = () => {
    const table = [];
    for (let x = 1; x <= 12; x++) {
      const row = [];
      for (let y = 1; y <= 12; y++) {
        row.push(x * y);
      }
      table.push(row);
    }

    return table;
  };

  // output.innerHTML = JSON.stringify(multiTable());

  const longestWord = (sentence) => {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  };

  // output.innerHTML = JSON.stringify(longestWord("This list lies"));

  const numberToDigits = (n) => {
    let arr = n.toString().split("");
    return arr.map((x) => parseInt(x));
  };

  output.innerHTML = JSON.stringify(numberToDigits(1123581321));
};
