var romanToInt2 = function (s) {
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let input = s.toUpperCase().split("");

  let hasil = input.map((e) => {
    return e in data ? data[e] : 0;
  });

  let result = hasil.reduce((acc, e) => {
    return acc + e;
  });

  return result;
};
console.log(romanToInt2("MCMXCIV"));



// ini cara pertama
var romanToInt = function(s) {
    const data = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    // bsia pake ini atau yang ini
    // return s.toUpperCase().split("").map((e) => e in data ? data[e] : 0).reduce((acc, n) => acc + n,0)
    return s.toUpperCase().split("").map((e) => data[e] ? data[e] : 0).reduce((acc, n) => acc + n,0)
};


var romanToInt = function (s) {
  const data = {
    I: 1,
    IV: 4,
    XC: 90,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    CM: 900,
    M: 1000,
  };
  return s
    .toUpperCase()
    .split("")
    .map((e) => {
      if (e in data) {
        if (data[e]) {
          if (data[e + 1] == "M" || data[e + 1] == "V" || data[e + 1] == "C") {
            return data[e + 1] - data[e];
          } else {
            return data[e];
          }
        }
        return 0;
      }
    })
    .reduce((acc, n) => acc + n, 0);
};
console.log(romanToInt("MCMXCIV"));



// cara lagi yang ketiga
var romanToInt3 = function (s) {
  const data = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];
  let d = ["M", "C", "M", "X", "C", "I", "V"];
  let input = s.toUpperCase().split("");
  console.log(input);
  let hasil = []

  for(let i = 0; i<input.length; i++){
    if (input[i] < input[i+1]) {
        hasil.push(data[i+1][1] - data[i][1]);
      } else if (input[i] > data[i][0]) {
        hasil.push(data[i][1]);
      }
  }

  return hasil.reduce((acc, e) => acc + e);

    // .map((e, i) => {
    //   if (input[i+1] == "M" || input[i+1] == "V" || input[i+1] == "C") {
    //     return input[i + 1] - input[i];
    //   } else if (input[i] == data[i][0]) {
    //     return data[i][1];
    //   }
    // })
    // .reduce((acc, e) => acc + e);
};

console.log("=========");
console.log(romanToInt3("MCMXCIV"));
// console.log(romanToInt3("III"));


// ini cara keempat

var romanToInt4 = function(s){
    const data = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
  let d = ["M", "C", "M", "X", "C", "I", "V"];
    let hasil = 0;
    let input = s.toUpperCase().split("");
    for(let i = 0; i<input.length; i++){
        let saatIni = data[input[i]]
        let saatBerikutnya = data[input[i+1]]
        if(saatIni < saatBerikutnya){
            hasil -= saatIni
        } else {
            hasil += saatIni
        }
    }

    return hasil
}
console.log(romanToInt4("iii"));


// cara kelima
// dan ini yang terbaik

var romanToInt5 = function(s) {
    const data = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    return s.toUpperCase().split("").map((e, i, arr) => {
        if(data[arr[i]] < data[arr[i+1]]) return -data[arr[i]]
        return data[arr[i]]
    }).reduce((acc, e) => acc + e)
};
console.log("========")
console.log(romanToInt5("MCMXCIV"))
console.log("========")
console.log(romanToInt("MCMXCIV"));


// jadi di cek apakah nilai array dengn index i lebih kebildengan nilai array dengan index i+1, maka jika ia maka kurangkan, jika tidka maka push saya ke array map, lalu nanti direduce

// itu yang kelima asalnya gini ifnya
// if(data[arr[i]] < data[arr[i+1]]) {
//     return -data[arr[i]]
//  } else {
//     return data[arr[i]]
//  }