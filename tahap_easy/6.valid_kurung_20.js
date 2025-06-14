// Diberikan string syang hanya berisi karakter '(', ')', '{', '}', '['dan ']', tentukan apakah string input valid.
// Suatu string masukan valid jika:
// Tanda kurung buka harus ditutup dengan tanda kurung jenis yang sama.
// Tanda kurung terbuka harus ditutup dalam urutan yang benar.
// Setiap tanda kurung tutup memiliki tanda kurung buka yang bersesuaian dengan jenis yang sama.
// Contoh 1:
// Masukan: s = "()"
// keluaran: benar
// Contoh 2:
// Masukan: s = "()[]{}"
// Keluaran: benar
// Contoh 3:
// Masukan: s = "(]"
// Keluaran: salah
// Contoh 4:
// Masukan: s = "([])"
// Keluaran: benar

// cara pertama (masih revisi)

var isValid = function (s) {
  let tandaKR = [];
  let tandaKS = [];
  let tandaK = [];
  const input = s.split("");
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{" || input[i] === "}") {
      tandaKR.push(input[i]);
    } else if (input[i] === "(" || input[i] === ")") {
      tandaK.push(input[i]);
    } else if (input[i] === "[" || input[i] === "]") {
      tandaKS.push(input[i]);
    }
  }
  if (
    tandaK.length % 2 == 0 &&
    tandaKS.length % 2 == 0 &&
    tandaKR.length % 2 == 0
  )
    return true;
  return false;
};

// console.log(isValid("([])"))

// cara kedua
var isValid2 = function (s) {
  let tandaKR = [];
  let tandaKS = [];
  let tandaK = [];
  console.log(s)

  if(s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    if((s[i] === "(" && s[i+1] === "(" ) || (s[i] === "[" && s[i+1] === "[")||(s[i] === "{" && s[i+1] === "{")){
        return false
    } else if((s[i] === ")" && s[i+1] === ")" ) || (s[i] === "]" && s[i+1] === "]")||(s[i] === "}" && s[i+1] === "}")) {
        return false
    } else if((s[i] === "(" && s[i+1] === ")" ) || (s[i] === "[" && s[i+1] === "]")||(s[i] === "{" && s[i+1] === "}")){
    } else if (s[i] === "{" && tandaKR[i] !== "{" || s[i] === "}" && tandaKR[i] !== "}") {
      tandaKR.push(s[i]);
    } else if (s[i] === "(" && tandaKR[i] !== "(" || s[i] === ")" && tandaKR[i] !== ")") {
      tandaK.push(s[i]);
    } else if (s[i] === "[" && tandaKR[i] !== "[" || s[i] === "]" && tandaKR[i] !== "]") {
      tandaKS.push(s[i]);
    } else {
        return false
    }
  }
  if ((tandaK.length % 2 !== 0 || tandaK.length == 0 &&tandaKS.length % 2 !== 0 || tandaKS.length == 0 &&tandaKR.length % 2 !== 0|| tandaKR.length == 0 )) return false;

  return true
};

console.log(isValid2("()"));



// ini cara ketiga

var isValid6 = function(s) {
  const stack = []; // untuk menyimpan tanda kurung tutupnya
  // nanti akan di cek menggunakan for, kalo misalkan i nya itu adalah tutupnya maka nanti akna di push ke array ini

  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of s) {
    if (char === ')' || char === ']' || char === '}') {
      // jika karakter adalah kurung tutup, maka kita push ke stack ke stack
      stack.push(char);
    } else {
      // jika karakter adalah kurung jika karakter adalah kurung buka, maka akan dice disiini

      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        // di cek jika panajng stack sama dengna 0 (berati kosong) maksudnya adlaah ketika kita perulangannyya sampai pada kurng buka (kan ini ga akan di di push), maka berati nanti di stacknya akan kosong karena kalo misalkan user cum ngasih ) saja, maka kan tidak akan di kirim ke stack dan artinya kosong

        // terus or jika di stack pada index terakhir tidak sama dengan map[char],
        // jadi misal index terakhirnya ) yang ada di stack dan tidka sama denagan map
        // map[")" / "]" / " }"] // karena ga mungkin (,[,{, karena sudah di valiasi di if sebelumnya

        // nah maka kalo misalkan beda maka akan direturn false


        // tapi kali misalkan sama maka akan di pop, dan akan hilang
        return false;

        //  console.log(map["("]) == )
      }
      // nah tapi kalo misalkan cocok maka akan di pop / dikeluarkan dari indeks terakhir
      stack.pop();
    }
  }

  // jika stack kosong di akhir, berarti semua sudah cocok
  return stack.length === 0;
};





var isValid5 = function(s) {
  const stack = []; // untuk menyimpan tanda kurung buka
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      // jika karakter adalah kurung buka, simpan ke stack
      stack.push(char);
    } else {
      // jika karakter adalah kurung tutup
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        // jika stack kosong atau pasangan tidak cocok
        return false;
      }
      // jika cocok, keluarkan pasangan dari stack
      stack.pop();
    }
  }

  // jika stack kosong di akhir, berarti semua sudah cocok
  return stack.length === 0;
};


  const map1 = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

 