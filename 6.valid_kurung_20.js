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
