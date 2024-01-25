let input = "saya bagas ramadhan rusnadi";
let key = "1234567890123456";
let inputHexa = "";
let keyHexa = "";

for (let i = 0; i < input.length; i++) {
  inputHexa += input[i].charCodeAt(0).toString(16) + " ";
}
for (let i = 0; i < key.length; i++) {
  keyHexa += key[i].charCodeAt(0).toString(16) + " ";
}

let Hexadecimal = inputHexa.trim().split(" ");
let keyFix = keyHexa.trim().split(" ");

for (let i = 0; i < Hexadecimal.length; i++) {
  Hexadecimal[i] = parseInt(Hexadecimal[i]);
}

let X = (index) => {
  let result = "";
  for (let i = index; i < Hexadecimal.length; i += 4) {
    result += Hexadecimal[i] + " ";
  }
  return result;
};

let block1 = X(0).trim().split(" ");
let block2 = X(1).trim().split(" ");
let block3 = X(2).trim().split(" ");
let block4 = X(3).trim().split(" ");

let K1 = Number(keyFix.slice(0, 2).toString().replace(/,/g, ""));
let K2 = Number(keyFix.slice(2, 4).toString().replace(/,/g, ""));
let K3 = Number(keyFix.slice(4, 6).toString().replace(/,/g, ""));
let K4 = Number(keyFix.slice(6, 8).toString().replace(/,/g, ""));
let K5 = Number(keyFix.slice(8, 10).toString().replace(/,/g, ""));
let K6 = Number(keyFix.slice(10, 12).toString().replace(/,/g, ""));
let K7 = Number(keyFix.slice(12, 14).toString().replace(/,/g, ""));
let K8 = Number(keyFix.slice(14, 16).toString().replace(/,/g, ""));

console.log(block1);
let L1 = block1 * K1;
console.log(L1);
