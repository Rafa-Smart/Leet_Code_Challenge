// # rotasi_kanan([1, 2, 3, 4, 5], 2)
// # # Output: [4, 5, 1, 2, 3]

function rotasi_kanan(data, posisi){
    for(let i = 0; i<posisi; i++){
        let a = data.pop()
        data.splice(0,0,a)
        console.log(i)
    }
    return data
}

console.log(rotasi_kanan([1, 2, 3, 4, 5], 2))
// [ 4, 5, 1, 2, 3 ]

// berhasil