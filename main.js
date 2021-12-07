//ANCHOR: Multiply
const multiply = (a, b) => {
  let res = 0;
  const pos = Math.abs(b) == b;
  for (let i = 0; i < b; i++) {
    res = res + a;
  }
  return res;
};

console.log(3, 3);

//ANCHOR: getBiggest

const getBiggest = (arr) => {
  return arr.reduce((acc, el) => {
    if (acc > el) {
      return acc;
    } else {
      return el;
    }
  });
};

console.log(getBiggest([12, 23, 20, 43, 23, 654, 54, 34, 2]));

//ANCHOR: clean

const clean = (arr) => {
  return arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);
};

console.log(clean([1, 2, 0, 3]));

//ANCHOR: flatten

const flatten = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.concat(el);
  }, []);
};

console.log(flatten([[1, 2], [[3, 4]], [1, []]]));

//ANCHOR: repeated word

const repeated = (str) => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(" ");
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return Object.entries(reduced).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  );
};

console.log(
  repeated(
    "SPLITED, CONRAT, EQUINOX, PROM, CONRAT, SEPHIROLT, EQUINOX, PROM, SPLITED, EQUINOX, CONRAT, PROM"
  )
);

//ANCHOR: palindrome

const isPalindrome = (str) => {
  str = str.replace(/\s/g, "");
  const lowered = str.toLowerCase();
  const splitted = lowered.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");
  return lowered == joined;
};

console.log(isPalindrome(""));
