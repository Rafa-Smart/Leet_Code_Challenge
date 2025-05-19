// Contoh 2:

// Masukan: s = "bbbbb"
//  Keluaran: 1
//  Penjelasan: Jawabannya adalah "b", dengan panjang 1.
// Contoh 3:

// Masukan: s = "pwwkew"
//  Keluaran: 3
//  Penjelasan: Jawabannya adalah "wke", dengan panjang 3.
// Perhatikan bahwa jawabannya harus berupa sub-string, "pwke" adalah suburutan dan bukan sub-string.

// ini cara yangsalah
function lengthOfLongestSubstring2(s){
    const tes = [...s]
    const hasil = new Set(tes)
    console.log(hasil.size)
    console.log(hasil)
}
lengthOfLongestSubstring2("pwwkew")
// https://chatgpt.com/c/68270b4f-dc5c-8009-9665-d7bfe9a7b14d
// Mengapa Hasilnya "abc"?
// Mari kita telusuri lebih detail:
// Saat menemukan karakter a kedua, kita menggeser start ke kanan untuk membuat substring baru tanpa duplikasi.
// Namun, hasil akhir dari pergeseran itu tetap tidak bisa lebih panjang dari substring "abc" yang ditemukan lebih awal.
// Oleh karena itu, meskipun nanti akan ada substring lain dengan panjang 3 (seperti "bca" atau "cab"), kita tetap menggunakan substring pertama yang memiliki panjang maksimum.


// ini cara yang benar
function lengthOfLongestSubstring(s) {
    let charSet = new Set();      // 1. Membuat Set untuk menyimpan karakter unik
    let maxLength = 0;            // 2. Menyimpan panjang substring terpanjang
    let start = 0;                // 3. Menandai awal window substring

    // 4. Loop untuk menelusuri setiap karakter pada string
    for (let end = 0; end < s.length; end++) {
        // 5. Jika karakter sudah ada di set (artinya duplikat)
        while (charSet.has(s[end])) {
            charSet.delete(s[start]); // 6. Hapus karakter paling kiri dari set
            start++;                  // 7. Geser awal window ke kanan
        }
        
        // 8. Tambahkan karakter baru (tidak duplikat) ke dalam set
        charSet.add(s[end]);
        
        // 9. Perbarui panjang maksimum substring jika panjang saat ini lebih besar
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log(charSet)
    return maxLength; // 10. Mengembalikan panjang substring terpanjang
}
console.log("=================")
console.log(lengthOfLongestSubstring("pwwkew"))
