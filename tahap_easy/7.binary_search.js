// jadi pencarian dalam metode binary seacrh adalah membagi data array menjadi 2, dan di cari apakah nilai tengahnya itu sama dengna target, maka akan direturn jika tikda maka akan di cari apakah target lebih kcil dari nilai, jika ia maka akan dicari kekiri, jika tidka akan dicari kekanan dan semuanya dibagi 2 lagi


function BinarySearch(arr, target){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = data[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    

    let kiri = 0;
    let kanan = arr.length - 1;

    while(kiri <= kanan){
        let tengah = Math.floor((kiri + kanan) / 2);
        if(arr[tengah] === target){
            return target

        } else if(arr[tengah] < target){
            kiri = tengah - 1
            // kanan = tengah + 1;
        } else {
            kanan = tengah + 1;
            // kiri = tengah - 1
        }
    }
    
    return -1;
}   


console.log(BinarySearch(1,2,3,1,2,3,6,4,7,2,8,9,10,12,11,14,13,15,17,16,19,18,10,20), 10)



// ohhh jadi kalo misl targetnya lebih kecil dari pada si tengah maka nanti maka akan dicari ke bawah atau ke kiri, nah jadi yang kirinya akan akan diset menjadi batas dari array si tengah agar pencariannya jadi ke kiri dan si kirinya akna di set menjadi 0 lagi


// tapi kalo misalkan target lebih besar dari pada si tengah maka akan dicari kekanan, nah, disii batas awalnya agar pencarian menjadi dikanan adalah dnegna cara si kirinya kamu set menjadi si tengah dikrurang satu, dan si kanannya akan tetap diset seperti diawal, gitu


function BinarySearch2(arr, target){


    for(let i = 0; i <arr.length; i++){
        for(let j = 0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    let kiri = 0;
    let kanan = arr.length - 1;

    while(kiri <= kanan){
        let tengah = Math.floor((kiri + kanan) / 2)
        if(arr[tengah] === target){
            return target
        } else if (arr[tengah] < target){
            kiri = tengah - 1;
        } else {
            kanan = tengah + 1;
        }
    }

    return "tidak ditemukan";
}

console.log(BinarySearch2([9,8,7,6,5,4,3,2,1], 7))