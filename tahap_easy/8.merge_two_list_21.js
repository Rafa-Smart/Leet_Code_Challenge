var mergeTwoLists = function (list1, list2) {
  let d = [];
  for (i = 0; i < list1.length; i++) {
    d.push(list1[i]);
  }
  for (i = 0; i < list2.length; i++) {
    d.push(list2[i]);
  }

  for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < d.length - 1; j++) {
      if (d[j] > d[j + 1]) {
        let temp = d[j];
        d[j] = d[j + 1];
        d[j + 1] = temp;
      }
    }
  }
  if(d){
    return d
  } else {
    return []
  }
};


console.log(mergeTwoLists([1,2,4], [1, 3, 4]));

// ini sebenarnya sudah beanar, tpai tidka sesuai dengan apa yang di inign kan oleh soal

// tapi itu masih salah
// ini penjelasan dari https://chatgpt.com/c/682c60a3-8364-8009-8092-538e49568e02
// coba nanit kmu baca


// dan ternyata linked list itu bukan struktur bawaan dari si jsnya melainnkan haya memang dibuat untuk soal saja di leetcode

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
// ini adalah contoh dari linked list yang sudah dibuat oleh leetcode
// dan ternyata sudah dibuatkan constrktornya

var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(-1); 
//   dan berati datanya adalah
// dummy ListNode {val: -1, next: null}
  let current = dummy;
    // console.log(list2.val)
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Salah satu dari list1 atau list2 masih punya node
  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
};


mergeTwoLists([3,4,5,2][6,2,3,5,3])