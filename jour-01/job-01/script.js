const text = document.querySelector("#text");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";

function myUpperCase(str) {
  let result = "";
  let i = 0;
  while (str[i]) {
    let char = str[i];
    let isLowercase = false;
    let j = 0;

    while (lower[j]) {
      if (char === lower[j]) {
        result += upper[j];
        isLowercase = true;
        break;
      }
      j++;
    }

    if (!isLowercase) {
      result += char;
    }

    i++;
  }

  return result;
}
myUpperCase("Hello World");
