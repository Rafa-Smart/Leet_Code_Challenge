function twoSum(nums, target){
    const hasil = []
    for(let i = 0; i<target;i++){
        for(let j = 0; j< target - 1; j++){
            if(nums[j] + nums[j+1] === target){
                let satu = nums.indexOf(nums[j])
                let dua = nums.indexOf(nums[j+1])
                hasil.push(satu)
                hasil.push(dua)
            }
        }
        return hasil
    }
}

console.log(twoSum([2,7,11,15],26 ))




function twoSum2(nums, target) {
  const hasil = [];
  for (let i = 0; i < target; i++) {
    if (nums[i] + nums[i + 1] === target) {
      let satu = nums.indexOf(nums[i]);
      let dua = nums.indexOf(nums[i + 1]);
      hasil.push(satu);
      hasil.push(dua);
    }
}
return hasil;
}
console.log(twoSum2([2,7,11,15],26 ))



// ini carayang benar, dan bisa mendeteksi seluruh pasangan yang sesuai meski tidka berurutn, kao dua sebelumnya itu bisa mendeteksi tapi kalo berurutan 
function twoSum3(nums, target){
    for(let i = 0; i<nums.length;i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                // disini karena pas di for yang si i, maka masuk ke for yang si j, nah di fr yang j ini akna di cek, si jnya ini akn adalah i+1, jadi ketika for i pertma, i nya akan selalu 0, dan j nya akan selalu bertambah, dan akan dicek si i yang di index 0 ini dnegan index index lainnya, samapi ketemu, dan jika di for i yang indexya 0 engga ada, maka di cek lagi si i jadi 1, dan jnya jadi 2, nah si j ini akna sealu ditambah karena berada di for yang kedua
                return [i, j]
            }
        }
    }
}
console.log(twoSum3([2,7,11,15],26 ))