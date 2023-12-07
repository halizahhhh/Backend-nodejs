// Buat variable name dan tampilkan
let name = "Siti Nurhalizah";
console.log(name);

// Buat Array
let angka = [1,2,3,4,5];
console.log(angka[0]);
//Menjumlahkan semua data
console.log(angka.length);

// Membuat Object
let mahasiswa = {
    // key: value
    nama: "Siti Nurhalizah",
    nim: "0110222224",
    jurusan: "Teknik Informatika"
};
console.log(mahasiswa.nim);

// Membuat If Else
let nilai = 70;
if (nilai > 80) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}

// Membuat Looping 1-10
// 3 parameter (Star, end , stap)
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// Membuat Function
function tambah(angka1, angka2) {
    return angka1 + angka2;
  }
  console.log(tambah(2, 7));