// 1.0 membuat object




// 1. object literal(akan susah untuk membuat object yang sama/ duplikasi susah)
// let mahasiswa = {
//   // property(nilai dalam object)
//   nama : "alwin",
//   energy : 10,
//   // method(function dalam object)
//   makan : function(porsi){
//     this.energy = this.energy + porsi;
//     // console.log("selamat datang " + nama + ", Selamat makan")
//     // cara baru
//     console.log(`halo ${this.nama} , selamat makan`);
//   }
// }


// 2. function declaration(tidak perlu membuat object yang sama berulang jika ingin membuat mahasiswa baru)
// function Mahasiswa(nama, energy){
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   mahasiswa.makan = function(porsi){
//     this.energy += porsi;
//     console.log(`halo ${this.nama} , selamat makan`);
//   }

//   mahasiswa.main = function(jam){
//     this.energy -= jam;
//     console.log(`halo ${this.nama} ,  selamat baermain`);
//   }

//   // harus ada return object
//   return mahasiswa;
// }
// // jika ingin membuat mahasiswa baru hanya perlu untuk membuat nama baru
// let alwin = Mahasiswa('alwin',10);
// let ufy = Mahasiswa('ufy',20);




// 3. Object.create()(digunakan untuk mendukung function decralation karena kurang efektif di memori)

// agar memori tidak menyimpan methodnya 2x
// const methodMahasiswa ={
//   makan: function(porsi){
  //     this.energy += porsi;
  //     console.log(`halo ${this.nama} , selamat makan`);
  //   },
  
  //   main: function(jam){
    //     this.energy -= jam;
    //     console.log(`halo ${this.nama} ,  selamat baermain`);
//   }
// }

// function Mahasiswa(nama, energy){
  //   // untuk membawa method ke object ini
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energy = energy;

//   // harus ada return object
//   return mahasiswa;
// }
// // jika ingin membuat mahasiswa baru hanya perlu untuk membuat nama baru
// let alwin = Mahasiswa('alwin',10);
// let ufy = Mahasiswa('ufy',20);


// 4.constructor function(mirip menggunakan function declaration dan paling sering di gunakan)
// function Mahasiswa(nama, energy){
//   // tidak perlu let mahasiswa tapi mengubahnya menjadi let this

//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function(porsi){
//     this.energy += porsi;
//     console.log(`halo ${this.nama} , selamat makan`);
//   }

//   this.main = function(jam){
//     this.energy -= jam;
//     console.log(`halo ${this.nama} ,  selamat baermain`);
//   }

//   // tidak perlu return object
// }
// // jika ingin membuat mahasiswa baru hanya perlu untuk membuat nama baru dan menambahkan new
// let alwin = new Mahasiswa('alwin',10);
// let ufy = new Mahasiswa('ufy',20);


// 5. prototype pada constructor function(hemat memori)/(prototypel inheritence)

// function Mahasiswa(nama, energy){
//   // tidak perlu let mahasiswa tapi mengubahnya menjadi this

//   // dan yang terjadi sebenarnya
//   // let this = Object.create(Mahasiswa.prototype)

//   this.nama = nama;
//   this.energy = energy;

//   // tidak perlu return object
//   // yang sebenarnya terjadi 
//   // return this;
// }

// // cara menggunakan prototypenya
// Mahasiswa.prototype.makan = function(porsi){
//   this.energy += porsi;
//   return `halo ${this.nama} , selamat makan`
// }
// Mahasiswa.prototype.main = function(jam){
//   this.energy -= jam ;
//   return `halo ${this.nama} , selamat bermain`
// }


// // jika ingin membuat mahasiswa baru hanya perlu untuk membuat nama baru dan menambahkan new
// let alwin = new Mahasiswa('alwin',10);
// let ufy = new Mahasiswa('ufy',20);


// 6. class(sama dengan yang atas tp tidak menggunakan prototype)(lebih enak di gunakan)

// class Mahasiswa{
//   constructor(nama,energy){
//     this.nama = nama;
//     this.energy = energy;
//   }

//   makan(porsi) {
//       this.energy += porsi;
//       return `halo ${this.nama} , selamat makan`
//     }
//     main(jam) {
//       this.energy -= jam ;
//       return `halo ${this.nama} , selamat bermain`
//     }
// }

// let alwin = new Mahasiswa('alwin',10);
// let ufy = new Mahasiswa('ufy',20);

// KESIMPULAN : SEMUA YANG ADA DI JAVASCRIPT ADALAH OBJECT JADI MISAL KITA INGIN MENGGUNAKAN ARRAY.SORT() DAPAT DI SIMPULKAN BAHWA SORT() ADALAH METHOD DARI OBJECT ARRAY YANG DI SIMPAN DALAM PROTOTYPE ARRAY. JADI ANDA BISA MENGECEK NYA DI ARRAY.PROTOTYPE, BISA JUGA CEK NUMBER.PROTOTYPE UNTUK MELIHAT ADA METHOD APA AJA DI DALAM ITU.

// 2.0 Closure

// 1. closures(function yang bisa mengambil nilai dari function parentnya)
// leksikal scope (bisa mengambil nilai dri luar function closure hanya berlaku jika leksikal scope terjadi)

// function init(){
//   let nama = "alwin";
//   function tampilNama(){
//     // mengambil nilai dri luar functionnya (closure)
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// kegunaan :
// 1. function factories(nama nya tergantung usernya mau masukin nama apa)
// function init(){
//   // sekarang init di jalankan tp tampil nama tidak di jalankan sehingga jika kita ingin membuat fungsi yang didalam nya ada fungsi tp tidak ingin langsung dijalankan dapat menggunakan cara ini
//   function tampilNama(nama){
//     // mengambil nilai dri luar functionnya (closure)
//     console.log(nama);
//   }
//   return tampilNama;
//   // atau dapat langsung di return fungsi tanpa nama "return function(nama){}"
// }

// // menyimpan function  tampilNama didalam suatu variabel
// let panggilNama = init();
// // menjalankan panggilNama
// panggilNama('alwinss')

// 2. private variabel
// membuat variabel counter menjadi private dan tidak dapat di ganggu oleh global
// let add = (function(){
//   let counter = 0;
//   return function(){
//     return ++ counter;
//   }
// })();

// counter = 10;

// // agar menjalankannya tidak perlu membuat variabel baru lagi maka dapat menggunakan immideatly involve function dengan cara membungkus functionnya dengan () lalu menambahkan () di akhir bungkusan liat contoh di atas

// // let a = add();

// console.log(add());



// 3.0 arrow function

// 1. bentuk lain yang lebih ringkas dari function expresion
// // function ekspression 
// let tampilPesan = function (nama){
//   alert(`dikirim oleh ${nama}`);
// }

// tampilPesan("alwin");

// // arrow function 
// let tampilNama = (waktu,nama)=>{
//   alert(`selamat ${waktu}, ${nama}`);
// }

// tampilNama("malam","alwin");

// mapping function ke dalam array
// let mahasiswa = ['alwin liufandy', 'ufy ananda','grant gabriel'];

// // function ekspression
// map untuk mengolah sebuah array dalam suatu kondisi lalu menggembalikannya sebagai sebuah array juga

// let jumlahHuruf = mahasiswa.map(function (nama){
//   return nama.length;
// });
// alert(jumlahHuruf)

// // arrow function
// jumlahHuruf = mahasiswa.map((nama)=>{
//   return nama.length;
// })
// alert(jumlahHuruf);

// // arrow function pengembalian object
// jumlahHuruf = mahasiswa.map((nama)=>({
//   nama : nama, jumlahHuruf : nama.length
// }));
// console.log(jumlahHuruf);

// 2. this pada arrow function

// menggunakan function ekspresion
// let Mahasiswa = function(){
//   this.nama = "alwin";
//   this.umur = 13;
//   this.sayHello = function(){
//     console.log(`halo, nama saya adalah ${this.nama}, dan saya ${this.umur} tahun`);
//   }
//   console.log(this);
// }

// let mahasiswa = new Mahasiswa();

// mahasiswa.sayHello();


// menggunakan arrow function
// tidak semua function bisa di ubah jadi arrow secara langsung tetapi method bisa di ubah secara langsung
// let Mahasiswa = function () {
//   this.nama = "alwin";
//   this.umur = 13;
//   this.sayHello = () => {
//     console.log(`halo, nama saya adalah ${this.nama}, dan saya ${this.umur} tahun`);
//   }
//   console.log(this);
// }

// let mahasiswa = new Mahasiswa();

// mahasiswa.sayHello();

// arrow function tidak ada konsep this nya(this nya tidak akan mengarah kemana mana, sdangkan construction function itu mengarah ke objectnya)
// let mhs1 = {
//   nama : "alwin",
//   umur : 22,
//   sayHello : () =>{
//     console.log(`Halo ${this.nama}, umur saya ${this.umur}`)
//   }
// }

// mhs1.sayHello();

// menggunakan function ekspresion karena di simpan dalam variabel dia tidak akan kena hoisting jadi this hanya mengacu pada object. sedangkan function declaration akan terkena hoisting sehingga this mengacu ke window karena ada fungsi setinterval

// let Mahasiswa = function(){
//   this.nama = "alwin";
//   this.umur = 13;
//   this.sayHello = function(){
//     console.log(`halo, nama saya adalah ${this.nama}, dan saya ${this.umur} tahun`);
//   }

//   // untuk mengatasi error nya maha dapat menggunakan arrow function karena tidak memiliki konsep this sehingga akan mencari ke luar dan tidak akan di hoisting juga

//   // setInterval(function(){
//   //   console.log(this.umur++)
//   // },500)

//   setInterval(()=>{
//     console.log(this.umur++)
//   },500);

//   console.log(this);
// }

// let mahasiswa = new Mahasiswa();

// mahasiswa.sayHello();

// // menghubungkan dengan kasus nyata di html
// const box = document.querySelector('.box');

// box.addEventListener('click',function(){
//   let satu = 'size';
//   let dua = 'caption';

//   if(this.classList.contains(dua)){
//     [satu,dua] = [dua,satu]
//   }

//   this.classList.toggle(satu);
//   setTimeout(() => {
//     this.classList.toggle(dua);
//   }, 600);
// })

// 4.0 higher order function(function yang menggunakan parameter berupa function lain atau dapat mengembalikan nilai sebagai sebuah function)

// 1. filter (prototype dari array, untuk menghasilkan array baru sesuai kriteria yang di inginkan)

// const angka = [1,3,4,5,6,2,45,6,32,4];
// const angkaBaru = [];

// mencari angka yang lebih besar sama dengan tiga
// pake for
// for(let i=0;i<angka.length;i++){
//   if(angka[i]>=3){
//     angkaBaru.push(angka[i]);
// }
// }
// console.log(angkaBaru);

// pake filter
// const angkaBaru = angka.filter(function(a){
//   return a>=3
// })
// console.log(angkaBaru);

// 2. map (setiap elemen di berikan suatu perintah dan dikembalikan dalam bentuk array yang berupa hasil dri masing masing elemen setelah di jalan kan perintahnya)
// const angkaBaru = angka.map((a) =>{
//   return a*2
// })
// console.log(angkaBaru);
// console.log(angka);




// 3. reduce (menggabungkan seluruh elemen pada array)
// jumlah seluruh element pada array
// const angkaBaru = angka.reduce((acculumator ,currentValue) =>{
//   return acculumator + currentValue;
// })
// console.log(angkaBaru);

// method chaning(untuk membuat ketiga cara diatas di gabungkan menjadi satu)
// const hasil = angka.filter((a)=>{return a>=10}).map((a)=>{return a*2}).reduce((accumulator,currentValue)=>{
//   return accumulator + currentValue
// })

// console.log(hasil);


// // latihan menggunakan high order function sacara real menggunakan method chaning

// // ambil seluruh element video
// // untuk membuat node list menjadi array
// let videos = Array.from(document.querySelectorAll('ul li'));

// // untuk menghitung jumlah video
// let jumlahVideo = videos.filter((namaVideo)=>{
//   return namaVideo.innerHTML.includes("JAVASCRIPT LANJUTAN")
// }).length

// // masukkan ke DOM
// const jumlahDOM = document.querySelector('.jumlah-video').innerHTML = `${jumlahVideo} Video`


// // untuk menghitung waktu
// // pilih yang hanya JAVASCRIPT LANJUTAN
// let durasiVideo = videos.filter((namaVideo)=>{
//   return namaVideo.innerHTML.includes("JAVASCRIPT LANJUTAN")
// })

// // ambil durasi masing masing video
// // dataset bisa diambil dengan menggunakan method seperti itu
// .map((durasi)=>{return durasi.dataset.duration})

// // ubah durasi menjadi integer, ubah menit jadi detik
// .map((pisahDurasi)=>{
//   return pisahDurasi.split(':')})
// .map((masing2)=>{
//   return masing2.map((jadiInt)=>{
//     return parseInt(jadiInt)
//   });
// })

// // jumlahin semua detik
// .map((menitDetik)=>{
//   return (menitDetik[0]*60) + menitDetik[1]
// }).reduce((total,sekarang)=>{
//   return total+sekarang
// })

// // diubah menjadi jam menit dan detik
// jam = Math.floor(durasiVideo/3600);
// menit = Math.floor((durasiVideo%3600)/60);
// detik = Math.floor(durasiVideo%60);

// // simpan di DOM
// let durasiDOM = document.querySelector('.total-durasi')
// durasiDOM.innerHTML = `${jam} jam ${menit} menit ${detik} detik`

// 5.0template literal(pembuatran string dengan backtic(`))
// ad beberapa kelebihan yaitu

// 1. dapat membuat multiline string
// console.log(`alwin
// liufandy
// winzliu`);

// 2. embedded expression
// const nama = 'alwin liufandy'
// console.log(`halo ${nama}`);
// let a = 10;
// let b = 11;
// console.log(`hasil jumlah dari ${a} dan ${b} adalahh ${a+b} ${alert("halo")} dan ${a} adalah bilangan ${(a%2 == 0)?"genap" : "ganjil"} sedangkan ${b} adalah bilangan ${(b%2 == 0) ? "genap" : "ganjil"}`);

// html fragment
// const mhs = {
//   nama : "alwin",
//   nim : "221402037",
//   umur : 18
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span>${mhs.umur}</span>
// </div>`

// console.log(el);

// tagged template(bisa menggunakan function di templete literal)

// const nama = "Alwin Liufandy"
// const umur = 18

// // parameter 1 = array string yangg di pisahkan oleh variabel,
// // parameter 2 = variabel pertama
// // parameter 3 = variabel kedua
// // dengan membuat ... maka dia akan memasukkan semua ekspression nya ke dalam array
// function coba(strings,...values){
//   // // rangkai menjadi string kembali
//   // let hasil = ''
//   // strings.forEach((str,i) => {
//   //   // jika values ada nilai maka munculkan values jika tidak ada maka munculkan kosong
//   //   hasil += `${str} ${values[i] || ""}`;
//   // });
//   // return hasil;

//   // menggunakan high order function
//   return strings.reduce((result, str, i) => {
//     return `${result}${str}${values[i] || ""}`
//   },'')
//   // result memiliki nilai awal ''
// }

// const str = coba`Halo nama saya ${nama}, dan saya ${umur} tahun`

// console.log(str);

// // penggunaan dalam kasus nyata(memberikan hightlight dalam semua hal yang di tambahkan menggunakan variabel)
// const nama = "Alwin Liufandy"
// const umur = 18
// const jurusan = "Teknologi Informasi"

// function highLight(strings,...values){
//   return strings.reduce((result, str, i) => {
//     return `${result}${str}<span style="color : blue;">${values[i] || ""}</span>`
//   },'')
// }

// const str = highLight`Halo nama saya ${nama}, dan saya ${umur} tahun, saya memilih jurusan ${jurusan}`

// document.body.innerHTML = str


// latihan template literal
// penggunaan dalam menggunakan html fragment

// 1.looping
// const mhs = [
//   {
//     nama : "Alwin Liufandy",
//     nim : 221402037
//   },
//   {
//     nama : "Ufy Ananda",
//     nim : 221402060
//   }
// ];

// const el = `<div class="mahasiswa">
// ${mhs.map((m) => {return `<ul>
// <li>Nama = ${m.nama}</li>
// <li>NIM = ${m.nim}</li>
// </ul>`}).join("")}
// </div>`

// 2.coonditional(ternary)
// const lagu = [
//   {
//     penyanyi : "isyana",
//     lagu : "tetap dalam jiwa"
//   },
//   {
//     penyanyi : "isyana",
//     lagu : "jika kau",
//     feat : "adam"
//   }
// ]

// const el = `<div class="lagu">
// ${lagu.map(lagu=>{return `<ul>
// <li>Lagu : ${lagu.lagu}</li>
// <li>Penyanyi : ${lagu.penyanyi} ${lagu.feat ? `(Feat. ${lagu.feat})` : ``}</li>
// </ul>`}).join("")}
// </div>`


// 3. nested (html bersarang)
// const mhs = {
//   nama : "Alwin Liufandy",
//   nim : 221402037,
//   jurusan : [
//     "Pemrograman Web",
//     "Pemrograman Berbasis Object",
//     "Dasar Dasar Pemrograman"
//   ]
// }

// function cetakMatakuliah(matakuliah){
//   return`<ul>
// ${matakuliah.map(jurusan => {return `<li>${jurusan}</li>`}).join("")}
// </ul>`
// }

// const el = `<div class="mahasisiwa">
// <h2>${mhs.nama}</h2>
// <h4>NIM : ${mhs.nim}</h4>
// <h4>Matakuliah</h4>
// ${cetakMatakuliah(mhs.jurusan)}
// </div>`

// document.body.innerHTML = el


// 6.0 Destructing variabel(bisa digunakan untuk membongkar array atau object kedalam variabel terpisah)

// const angka = ["satu", "dua", "tiga"];

// const [satu,dua,tiga] = angka;

// console.log(dua);

// tukar nilai
// let a = 10;
// let b = 11;

// [a,b] = [b,a];
// console.log(a)

// return value pada function
// function coba(){
//   return [1,2]
// }

// const [a,b] = coba();
// console.log(a);

// rest parameter(...)
// const [a,...b] = [1,2],

// console.log(a);

// distructuring object
// const mhs = {
//   nama: "Alwin Liufandy",
//   umur: 18
// }

// const {nama , umur} = mhs;

// console.log(nama)


// // assignment tanpa deklarasi
// ({nama, umur} = {
//   nama: "Alwin Liufandy",
//   umur: 18
// })

// console.log(nama)

// // memberikan nilai default
// const mhs = {
//   nama : "Alwin Liufandy",
//   umur : 18,
//   jurusan : "Teknik Mesin"
// }

// const {nama: n, umur : u, jurusan : j = "Teknologi Informasi"} = mhs

// console.log(n);
// console.log(u);
// console.log(j);

// mengambil field pada object, setelah dikirim sebagai parameter untuk fungsi
// const mhs = {
//   id : 123,
//   nama : "Alwin Liufandy",
//   umur : 19,
//   jurusan : "Teknologi Informasi"
// }

// // tidak perlu menulis getIdMhs(mhs){return mhs.id}
// function getIdMhs({id}){
//   return id;
// }

// console.log(getIdMhs(mhs))

// destructuring function return value
// function kalkulasi(a,b){
//   return [a+b, a*b, a-b , a/b]
// }

// // const jumlah = penjumlahanPerkalian(2,3)[0];
// // const kali = penjumlahanPerkalian(2,3)[1];

// const [tambah = "tidak ada",kali = "tidak ada",kurang = "tidak ada",bagi= "tidak ada"] = kalkulasi(2,3)

// console.log(tambah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);

// agar pengembalian nilai tidak sesuai dengan indeks tapi bisa di panggil sesuai nama kita harus mereturn object

// function kalkulasi(a,b){
//   return {
//     tambah: a+b,
//     kurang: a-b,
//     kali: a*b,
//     bagi: a/b
//   }
// }

// const {kali="Tidak ada", bagi="Tidak ada", kurang="Tidak ada", tambah="Tidak ada"} = kalkulasi(3,4);

// console.log(`hasil tambah adalah ${tambah}`);
// console.log(`hasil kurang adalah ${kurang}`);
// console.log(`hasil kali adalah ${kali}`);
// console.log(`hasil bagi adalah ${bagi}`);

// // destructuring function arguments
// const mhs1 = {
//   nama : "Alwin Liufandy",
//   umur : 19,
//   nilai : {
//     uas : 90,
//     uts : 85,
//     tugas : 95,
//   }
// } 

// // function cetakMhs(nama,umur){
// //   return `Halo nama saya ${nama}, satya berumur ${umur} tahun.`
// // }

// // destructuring
// function cetakMhs({nama, umur, nilai: {uas,uts,tugas}}){
//   return `Halo, nama saya adalah ${nama} , dan saya berusia ${umur} tahun. Dan nilai uas saya adalah ${uas}, uts saya adalah ${uts} dan tugas saya adalah ${tugas}` 
// }

// console.log(cetakMhs(mhs1));

// 7.0 looping baru pada javascript (for .. of dan for .. in)bisa digunakan untuk looping di dalam string,array,argument,nodelist,typed array,map,set,user-defined iterable(iterable object)
// const mhs = ['alwin','angga','ufy','samuel'];

// for ... of

// for(let i=0;i<mhs.length;i++){
//   console.log(mhs[i]);
// }

// mhs.forEach((m)=>{
//   console.log(m);
// })

// for(const m of mhs){
//   console.log(m);
// }

// const nama = "alwin liufandy";
// for(const n of nama){
//   console.log(n);
// }

// mhs.forEach((m,i) => {
//   console.log(`${m} adalah mahasiswa ke ${i+1}`);
// });

// for(const [m,i] of mhs.entries()){
//   console.log(`${i} adalah mahasiswa ke ${m+1}`);
// }

// const li = document.querySelectorAll('ul li');

// li.forEach(li => {
//   console.log(li.innerHTML);
// });

// for(const l of li){
//   console.log(l.innerHTML);
// }


// function jumlah(){
//   jumlah = 0;
//   for(a of arguments){
//     jumlah += a
//   }
//   console.log(jumlah);
// }

// jumlah(1,2,3,4,5,6)

// for..in digunakan untuk melooping object 
// const mahasiswa = {
//   nama : "alwin Liufandy",
//   nim : 221402037,
//   jurusan : "Teknologi Informasi",
// }

// for(const m in mahasiswa){
//   console.log(m);
//   console.log(mahasiswa[m]);
// }

// 8.0 Spread Operator & rest parameter

// spread operator(digunakan untuk memecahkan iterable(yang banyak isi nya menajdi single elements) contoh iterable itu se[erti array, string, nodelist, argumert dan banyak lagi)

// const mahasiswa = ["alwin","ufy","grant"];
// console.log(...mahasiswa);
// console.log(...mahasiswa[0]);

// // dapat digunakan untuk menggabungkan dua buah array
// const dosen = ['ivan','ade','sarah'];
// // bisa juga menggunakan cara seperti ini const orang = mahasiswa.concat(dosen);
// // tetapi spread operator bisa lebih fleksibel karen abisa menambahkan element baru langsugn di tengah tengah nya
// const orang = [...mahasiswa,'aji',...dosen];
// console.log(orang);

// dapar mengcopy array dan mengubah isi nya
// const mahasiswa1 = mahasiswa;
// mahasiswa1[0] = 'winzliu'
// array mahasiswa juga ikut terganti
// untuk mengatasinya bisa menggunakan spread array
// const mahasiswa1= [...mahasiswa];
// mahasiswa1[0] = 'winzliu'

// console.log(mahasiswa1);

// membuat setiap huruf yang di hover berwarna
// const kata = document.querySelector('h3')
// const huruf = [...kata.innerHTML].map(h => `<span>${h}</span>`);
// kata.innerHTML = huruf.join("")

// rest parameter (notasi nya sama yaitu (...) tetapi di gunakan untuk merepresentasikan argument yang tidak terbatas menjadi sebuah array)

// hanya bisa digunakan di akhhir parameter karena merupakan rest(sisanya) tidak boleh di depan contohnya (...angka,a,b)
// function angka (...angka){
//   return angka;
// }

// console.log(angka(1,2,3,4,5,6));

// function jumlah(...angka){
//   return angka.reduce((a,i) => {return a+i})
// }

// console.log(jumlah(1,2,3,4,5,6,7,8,9));


// pemanfaatan pada destructuring array
// const kelompok1 = ["alwin","ufy","grant","samuel","oswald"]

// const [ketua,wakil,...anggota] = kelompok1

// memanfaatkan untuk filter
// function filterBy(type, ...values){
//   return values.filter((v) => typeof(v) == type)
// }

// console.log(filterBy('number',1,2,3,4,"alwin",5,true,false));

// 9.0 asyncronus javascript

// 9.1 callback(sebuah fungsi yang menerima dan mengembalikan sebuah fungsi)
// syncronus callback
// function halo(nama){
//   alert(`Halo, Nama ku adalah ${nama}`)
// }

// function tampilkanNama(callback){
//   const nama = prompt(`Masukkan nama kalian : `);
//   callback(nama);
// }

// // tampilkanNama(halo)
// // bisa juga hanya menggunakan anonymous function
// tampilkanNama((nama)=>{
//   alert(`Halo, Nama ku adalah ${nama}`)
// })

// alasan butuh asyncronous callback
// const mahasiswa = [
//   {
//     nama : "Alwin Liufandy",
//     nim : 221402037,
//     jurusan : "Teknologi Informasi",
//     dosenWali : 1
//   },
//   {
//     nama : "Ufy Ananda",
//     nim : 221402060,
//     jurusan : "Teknologi Informasi",
//     dosenWali : 2
//   },
//   {
//     nama : "Grant Gabriel",
//     nim : 221402090,
//     jurusan : "Teknologi Informasi",
//     dosenWali : 3
//   }
// ];

// console.log("malai");
// mahasiswa.forEach(el => {
//   console.log(el.nama)
// });
// // jika pengambilan data tidak secara langsung atau melalui api dan database maka akan ada jedawaktu yang menyebab kan apapun perintah di bawahnya akan mengalami keterlembatan juga, maka di sini kita membutuhkan asyncronous agar yang lain ttp berjalan selagi menunggu yang lainnya loading
// console.log("selesai");

// // asyncronous callback(pengambilan melalui file json(array of object))
// function getDataMahasiswa(url, success, error){
//   // ajax
//   let xhr = new XMLHttpRequest();
//   // ketika state nya sudah siap jalan kan fungsi ini
//   xhr.onreadystatechange = function(){
//     // saat state sudah ready
//     if(xhr.readyState === 4){
//       // saat data sudah okay
//       if(xhr.status === 200){
//         // jika sudah sukses jalankan function sukses
//         success(xhr.response);
//       }else if(xhr.status === 404){
//         error();
//       }
//     }
//   }
//   xhr.open('get',url)
//   xhr.send()
// }


// // test
// console.log("mulai");
// // pemanggilan serta menambahkan anonymous function pada fungsi sukses dan error
// getDataMahasiswa('data/mahasiswa.json',(result)=>{
//   // agar pengembaliannya dalam bentuk object maka menggunakan json parse
//   const mhs =JSON.parse(result);
// mhs.forEach(maha => {
//     console.log(maha.nama);
//   });
// }, ()=>{
//   console.log("error ges");
// })
// console.log("selesai");

// // yang lain akan di tampilkan duluan karena masih membutuhkan loading dalam pengambilan datanya sehingga tidak menggangu pengeksekusian task task di bawahnya

// membuat asyncronous javascript menggunakan jquery
// console.log("mulai");
// $.ajax({
//   url : 'data/mahasiswa.json',
//   // yang dikembalikan sudah dalam bentuk json jadi kita tidak perlu parse lagi
//   success : (mhs)=>{
//     mhs.forEach(maha => {
//       console.log(maha.nama);
//     });
//   },
//   error : ()=>{

//   }
// })
// console.log("selesai");

// membuat web movie dengan menggunakan API & jquery 

const isiModals = (respon) =>{
  return `<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="ModalsLabel">${respon.Title}</h1>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <img src="${respon.Poster}" alt="" class="imd-fluid" style="width: 190px; height: 250px; object-fit: cover"/>
        </div>
        <div class="col-md-9">
          <ul class="list-group">
            <li class="list-group-item"><b>${respon.Title} (${respon.Year})</b></li>
            <li class="list-group-item">Director : ${respon.Director}</li>
            <li class="list-group-item">Actors : ${respon.Actors}</li>
            <li class="list-group-item">Writer : ${respon.Writer}</li>
            <li class="list-group-item">
              Plot : <br />
              ${respon.Plot}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button
      type="button"
      class="btn btn-danger"
      data-bs-dismiss="modal"
    >
      Close
    </button>
          
  </div>
    </div>
  </div>`
}

const isiMain = (movie)=>{
  return `<div class="col-md-4 my-3">
  <div class="card m-auto" style="width: 18rem">
    <img src="${movie.Poster}" class="card-img-top" style="width: 285px; height: 400px; object-fit: cover" alt="" />
    <div class="card-body">
      <h5 class="card-title">${movie.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
      <button
  type="button"
  class="btn btn-primary detail"
  data-bs-toggle="modal"
  data-bs-target="#Modals"
  data-imdb = ${movie.imdbID}
  >
  Show Details
  </button>
    </div>
  </div>
  </div>`;
}

// $('.searchButton').on('click',function(){
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=d8975cc&s=' + $('.keyword').val(),
//     success: (result)=>{
//       const movies = result.Search;
//       let card = ``;
//       movies.forEach(movie => {
//         card += isiMain(movie)
  
//         $('#main').html(card)
        
//         // ketikla tombol detail di klik
//         $('.detail').on('click',function(){
//         $.ajax({
//           url: 'http://www.omdbapi.com/?apikey=d8975cc&i=' + $(this).data('imdb'),
//           success: (result)=>{
//             const movieDetail = isiModals(result);
  
//           $('#Modals').html(movieDetail);
//         },
//           error: (e)=>{
//             console.log(e.responseText);
//           }
//         });
//       });
//     })
//   },
//     error: (e)=>{
//       console.log(e.responseText);
//     }
//   })
// })

// selain menggunakan jquery(library dari luar) kita bisa hanya menggunakan fetch untuk memakai ajax tapi hasil yang di keluarkan oleh fetch adalah dalam bentuk promise. sehingga kita harus mempelajari apa itu promise

// promise(object yang merpresentasikan keberhasilan/kegagalan sebuah event yang asyncronus di masa yang akan datang)(dan bisa menghindari callback hell)
// janji(terpenuhi/ingkari)
// states(fulfilled/rejected/pending)(pending : waktu tunggu)
// callback(resolve/reject/finally)
// aksi(then/catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati){
//     // fungsi callback yang akan di tangkap oleh then
//     resolve("Janji di terpati");
//   }else{
//     // fungsi callback yang akan di tangkap oleh catch
//     reject("Janji tidak di tepati");
//   }
// })

// janji1
//   .then((respon)=>{console.log("OK! : "+respon);})
//   .catch((respon)=>{console.log("NOT OK! : "+respon);})

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati){
//     // fungsi callback yang akan di tangkap oleh then
//     setTimeout(() => {
//       resolve("Janji di terpati setelah menunggu");
//     }, 2000);
//   }else{
//     // fungsi callback yang akan di tangkap oleh catch
//     setTimeout(()=>{
//       reject("Janji tidak di tepati setelah menunggu");
//     },2000)
//   }
// })

// console.log("Mulai");
// // console.log(janji2.then(()=>{return console.log(janji2)}));
// janji2
// // finally(akan dijalankan setelah selesai menunggu biasanya untuk menghilangkan animasi loading)
//   .finally(()=>{console.log("setelah menunggu");})
//   .then((respon)=>{console.log("OK! : "+respon);})
//   .catch((respon)=>{console.log("NOT OK! : "+respon);})
// console.log("Selesai");

// contoh 3(penggunaan Promise.all())
// hanya menggunakan resolve biar cepat dan mudah
// const film = new Promise((resolve) =>{
//   setTimeout(() => {
//     resolve([{
//       judul : "Your Name",
//       sutradara : "Alwin Liufandy"
//     }])
//   }, 1000);
// })

// const cuaca = new Promise((resolve)=>{
//   setTimeout(() => {
//     resolve([{
//       kota : "RantauPrapat",
//       suhu : 30
//     }])
//   }, 500);
// })

// // film.then((respon) => {console.log(respon);})
// // cuaca.then((respon) => {console.log(respon);})

// // untuk memanggilnya bisa menggunakan promise.all langusng(menggunakan [] untuk memisahkan nya satu satu jika tidak maka akan membuat array on array)
// Promise.all([film,cuaca])
//   .then((respon)=>{
//     const [film,cuaca] = respon;
//     console.log(film);
//     console.log(cuaca);
//   })


// membuat web movie dengan menggunakan API & fetch agar tidak berat karena menggunakan library luar
// const keyword = document.querySelector('.keyword');
// keyword.addEventListener('input',function(){
//   // menggantikan ajax dengan menggunakan fetch untuk modern javascript
//   fetch('http://www.omdbapi.com/?apikey=d8975cc&s=' + keyword.value)
//   // agar hasil yang di tampilkan dalam bentuk jason perlu memanggil fungsi json dan karena hasilnya dalam bentuk promise maka kita harus menjalankan thennya 2 kali
//   .then((respon)=>{return respon.json()})
//   .then((respon)=>{
//     const movies = respon.Search;
//       let card = ``;
//       movies.forEach(movie => {
//         card += isiMain(movie)
//       });
//       // poster card
//       const mainCard = document.querySelector('#main');
//       mainCard.innerHTML = card;

//       // ketikla tombol detail di klik
//       const detailButton = document.querySelectorAll('.detail');
//       detailButton.forEach((btn) => {
//         btn.addEventListener('click',function(){
//         const imdb = this.dataset.imdb;
//         fetch('http://www.omdbapi.com/?apikey=d8975cc&i=' + imdb)
//           .then((respon)=>{return respon.json()})
//           .then((respon)=>{
//             const movieDetail = isiModals(respon)
//             const modals = document.querySelector('#Modals');
//             modals.innerHTML = movieDetail;
//           })
//       })})
//   })
//   .catch((error)=>{console.log(error);})
// })

// merefactoring kode kode di atas menjadi lebih masuk akal untuk di baca dan lebih enak di liat(menggunakan asyn dan await)

// membuat web movie dengan menggunakan API & fetch agar tidak berat karena menggunakan library luar dan menambahkan error handling
const keyword = document.querySelector('.keyword');
// async di gunakan untuk memberitahukan bahwa di dalam fungsi nya akan ada menggunakan fungsi lain yang berupa asyncronous dan await di gunakan untuk menandakan fungsi mana yang asycronous
keyword.addEventListener('input', async function(){
    try{
      const movies = await getMovies(keyword.value);
      tampilUI(movies);
    } catch(err){
      const mainCard = document.querySelector('#main');
      mainCard.innerHTML = `<p class="text-danger">${err}</p>`;
  }
})

// karena kita sudah memisahkan fetch nya maka sekarang untuk klik tombolnya tidak bisa langsung memasukkan ke dalam then(saat sudah ada card)
// dan kita juga tidak bisa langsung mengambil tombol button nya karena tombolnya blm ada saat halaman pertama kali diload maka kita harus menggunakan event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('detail')){
      const imdb = e.target.dataset.imdb;
      const detail = await getModals(imdb);
      tampilModals(detail);
    }
})

// memisahkan ke dalam function agar lebih mudah untuk di liat dan di pahami
function getMovies(keyword){
  return fetch('http://www.omdbapi.com/?apikey=d8975cc&s=' + keyword)
  .then((respon)=>{
    if(!respon.ok){
      console.log(respon.statusText);
      if(respon.statusText === "Unauthorized"){
        throw "Gagal Menghubungkan ke API.";
      }
    }
    return respon.json();
  })
  .then((respon)=>{
    if(respon.Response === "False"){
      if(respon.Error === "Incorrect IMDb ID."){
        throw "Masukan kata pencarian."
      }
      else if(respon.Error === "Too many results."){
        throw "Mohon Masukkan kata pencarian yang lebih spesifik."
      }
      else if(respon.Error === "Movie not found!"){
        throw "Film yang dicari tidak tersedia."
      }
    }
    return respon.Search
  })
}

function tampilUI(movies){
      let card = ``;
      movies.forEach(movie => {return card += isiMain(movie)})
      const mainCard = document.querySelector('#main');
      mainCard.innerHTML = card;
}

function getModals(imdb){
  return fetch('http://www.omdbapi.com/?apikey=d8975cc&i=' + imdb)
      .then((respon)=>{return respon.json()})
      .then((respon)=>{return respon})
}

function tampilModals(detail){
  const movieDetail = isiModals(detail)
  const modals = document.querySelector('#Modals');
  modals.innerHTML = movieDetail;
}



















