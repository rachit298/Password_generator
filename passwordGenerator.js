const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function generatePass() {
  let passLength = document.getElementById("passLength");
  let numbers = document.getElementById("numbers");
  let symbols = document.getElementById("symbols");
  let pass1 = document.getElementById("pass1");
  let pass2 = document.getElementById("pass2");
  let passValue = passLength.value;

  if (passLength.value.length === 0) {
    passValue = 15;
  } else {
    passValue = parseInt(passLength.value);
  }

  if (numbers.checked === true && symbols.checked === true) {
    pass1.textContent = createPass(characters, passValue);
    pass2.textContent = createPass(characters, passValue);
  } else if (numbers.checked === true && symbols.checked === false) {
    let arr1 = characters.slice(0, 52 + 10);
    pass1.textContent = createPass(arr1, passValue);
    pass2.textContent = createPass(arr1, passValue);
  } else if (numbers.checked === false && symbols.checked === true) {
    let arr1 = characters.slice(0, 52);
    let arr2 = characters.slice(62);
    let arr3 = arr1.concat(arr2);
    pass1.textContent = createPass(arr3, passValue);
    pass2.textContent = createPass(arr3, passValue);
  } else {
    let arr1 = characters.slice(0, 52);
    pass1.textContent = createPass(arr1, passValue);
    pass2.textContent = createPass(arr1, passValue);
  }

  passLength.value = "";
}

function createPass(array, passLength) {
  let str = "";
  while (passLength > 0) {
    str += array[Math.floor(Math.random() * array.length)];
    passLength--;
  }
  return str;
}

function copyText1() {
    let text = document.getElementById("pass1").innerText;
    copy(text);
}
function copyText2() {
    let text = document.getElementById("pass2").innerText;
    copy(text);
}

function copy(text) {
    navigator.clipboard.writeText(text);
    alert("Password copied!");
}
