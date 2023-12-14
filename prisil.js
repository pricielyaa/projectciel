/*console.log("haiiiiii")

let nama = "ciel"
let namaku
namaku = nama


const uang = 1
//ini code untuk menyemangati prisil
console.log(nama)
console.log(uang)


let a = 3
let b = 4
penjumlahan = a+b
console.log (penjumlahan)

let grade = 3;
let nilai;
if (grade > 3.5){
    nilai = "cumlaude"
}else if (grade >= 3 && grade < 3.5){
    nilai = "baik"
}else{
    nilai = cukup
}
console.log(nilai);


let ipk = 3.2;
let ipk1 = "rizal"
let ipk2 = true

/*if(ipk>ipk1){
    console.log("baik")

}else if (ipk > ipk2){
    console.log("cumlaude")
}else{
    console.log("kurang")


console.log(typeof ipk2)

let variabel
variabel = "nilai"
//variabel = 0
console.log(variabel)

*/

//let array = ["elyn", "ciel", "prisil"];
//console.log(array[0]);
//console.log(array.length - 1);
//console.log(array.toString());

//pop-remove last element
//console.log(array.pop());
//console.log(array);

//push-add new element to array (at the end)
//console.log(array.push(7));
//console.log(array);

//shift - remove first array
//console.log(array.shift());
//console.log(array);

//unshift - add new element di depan array
//console.log(array.unshift("uhuy"));
//console.log(array);

/*let array = [13, 1, 444, 7];
//sort
console.log(array.sort());
console.log(array.reverse());

console.log(
  array.sort(function (a, b) {
    return a + b;
  })
);*/

/*function sorting(arr) {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let numbers = [4, 2, 7, 1, 9, 5];
let sortedNumbers = sorting(numbers);
console.log(sortedNumbers);
*/
//name(array);
// let a = false;
// let b = 0;

// console.log(a == b);

// var nilai = 60;
// var hasil = nilai >= 70 ? "lulus" : "tidak lulus";
// console.log(hasil);

// var hari = "senin";
// var aktifitas;

// switch (hari) {
//   case "senin":
//     aktifitas = "meeting";
//     break;
//   case "selasa":
//     aktifitas = "pelatihan";
//     break;
//   case "rabu":
//     aktifitas = "kantor";
//     break;
//   default:
//     aktifitas = "libur";
// }
// console.log("hari" + hari + ", aktifitas: " + aktifitas);

// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }

// var i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// function segitiga(panjang) {
//   for (let i = 0; i < panjang; i++) {
//     let spasi = " ".repeat(panjang - 1);
//     let bintang = "*".repeat(i);
//     console.log(spasi + bintang);
//   }
// }
// segitiga(4);

// function segitiga2(panjang) {
//   for (let i = panjang; i >= 1; i--) {
//     let spasi = " ".repeat(panjang - 1);
//     let bintang = "*".repeat(i);
//     console.log(spasi + bintang);
//   }
// }
// segitiga2(4);

// function segitiga3(panjang, condition) {
//   if (condition == "terbalik") {
//     for (let i = 0; i < panjang; i++) {
//       let spasi = " ".repeat(panjang - 1);
//       let bintang = "*".repeat(i);
//       console.log(spasi + bintang);
//     }
//   }
// }
// segitiga(4, "terbalik");

function Mahasiswa(nama, jurusan) {
  this.nama = nama;
  this.jurusan = jurusan;
  this.sapa = function () {
    console.log(
      "halo nama saya " + this.nama + " dari jurusan " + this.jurusan
    );
  };
}
var mahasiswa1 = new Mahasiswa("alice", "informatika");
var mahasiswa2 = new Mahasiswa("bob", "ekonomi");

mahasiswa1.sapa();
mahasiswa2.sapa();
