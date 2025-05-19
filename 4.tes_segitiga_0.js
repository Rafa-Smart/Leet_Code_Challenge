// Anda diberikan sebuah array integer berindeks 0nums dengan ukuran 3yang dapat membentuk sisi-sisi sebuah segitiga.
// Segitiga disebut sama sisi jika semua sisinya sama panjang.
// Suatu segitiga disebut sama kaki jika memiliki tepat dua sisi yang sama panjang.
// Suatu segitiga disebut skalena jika semua sisinya memiliki panjang yang berbeda.
// Mengembalikan string yang mewakili jenis segitiga yang dapat dibentuk atau "none"jika tidak dapat membentuk segitiga.
// Contoh 1:
// Input: nums = [3,3,3]
//  Output: "sama sisi"
//  Penjelasan: Karena semua sisinya sama panjang, maka akan membentuk segitiga sama sisi.
// Contoh 2:
// Masukan: nums = [3,4,5]
//  Keluaran: "skalen"
//  Penjelasan:
// nums[0] + nums[1] = 3 + 4 = 7, yang lebih besar dari nums[2] = 5.
// nums[0] + nums[2] = 3 + 5 = 8, yang lebih besar dari nums[1] = 4.
// nums[1] + nums[2] = 4 + 5 = 9, yang lebih besar dari nums[0] = 3.
// Karena jumlah kedua sisi lebih besar daripada sisi ketiga pada ketiga kasus, maka dapat membentuk segitiga.
// Karena semua sisinya berbeda panjang, maka akan membentuk segitiga sembarang.

var triangleType = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      return "equilateral";
    } else if((nums[i] + nums[i + 1] < nums[2] &&
        nums[i] + nums[i + 2] > nums[1] &&
        nums[1] + nums[2] > nums[i])) {
        return "none"
    } else if((nums[i] + nums[i + 1] > nums[2] &&
        nums[i] + nums[i + 2] > nums[1] &&
        nums[1] + nums[2] === nums[i])) {
        return "none"
    } else if((nums[i] + nums[i + 1] > nums[2] &&
        nums[i] + nums[i + 2] > nums[1] &&
        nums[1] + nums[2] < nums[i])) {
        return "none"
    } else if((nums[i] + nums[i + 1] > nums[2] &&
        nums[i] + nums[i + 2] < nums[1] &&
        nums[1] + nums[2] > nums[i])) {
        return "none"
    } else if((nums[i] + nums[i + 1] === nums[2] &&
        nums[i] + nums[i + 2] > nums[1] &&
        nums[1] + nums[2] > nums[i])) {
        return "none"
    } else if((nums[i] + nums[i + 1] > nums[2] &&
        nums[i] + nums[i + 2] === nums[1] &&
        nums[1] + nums[2] > nums[i])) {
        return "none"
    } else if (
      (nums[i] === nums[i + 1] && nums[i] !== nums[i + 2]) ||
      (nums[i] !== nums[i + 1] && nums[i] === nums[i + 2]) ||
      (nums[i] !== nums[i + 1] && nums[i + 1] === nums[i + 2])
    ) {
      return "isosceles";
    } else if (
      nums[i] + nums[i + 1] > nums[2] &&
      nums[i] + nums[i + 2] > nums[1] &&
      nums[1] + nums[2] > nums[i]
    ) {
      return "scalene";
    } else {
      return "none";
    }
  }
  console.log(nums[0]);
  console.log(nums[1]);
  console.log(nums[2]);
};

console.log(triangleType([5,5,10]));
//nums[i] === nums[i+1] && nums[i] !== nums[i+2] || nums[i] !== nums[i+1] && nums[i] === nums[i+2] || nums[i] !== nums[i+1] && nums[i+1] === nums[i+2]


// ini jawaban ai
function jenisSegitiga(nums) {
    // Urutkan sisi dalam urutan menaik
    nums.sort((a, b) => a - b);

    // Cek apakah bisa membentuk segitiga
    if (nums[0] + nums[1] <= nums[2]) {
        return "none"; // Bukan segitiga
    }

    // Cek jenis segitiga
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
        return "sama sisi"; // Semua sisi sama panjang
    }
    if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
        return "sama kaki"; // Tepat dua sisi sama panjang
    }
    return "skalen"; // Semua sisi berbeda panjang
}


console.log(jenisSegitiga([5,5,10]))