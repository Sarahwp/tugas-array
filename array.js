// soal no1
let pekerjaan = ["web developer", " system analyst", " database administrator", " hardware engineer" , "software developer"];
console.log("Jumlah Pekerjaan IT : " + pekerjaan.length);
console.log("Nama Pekerjaan Bidang IT : " + pekerjaan);

document.getElementById("jumlahPekerjaanIT").innerHTML = pekerjaan.length;
document.getElementById("namaPekerjaanIT").innerHTML = pekerjaan;

// soal No 2
let team = ["Harry", " Niall", " Louis", " Zayn", " Liam", " Sarah"];
const team1 = team.slice(0, 3);
const team2 = team.slice(3, 6);

console.log(team1, team2);

document.getElementById("fullTeam").innerHTML = team;
document.getElementById("team1").innerHTML = team1;
document.getElementById("team2").innerHTML = team2;

// soal No 3
let data = [3, 5, 7, 9, 11];
let hasil = data.map((number) => {
  return number * 5;
});

console.log(data);
console.log(hasil);

document.getElementById("firstArray").innerHTML = data;
document.getElementById("newArray").innerHTML = hasil;

// soal No 4
let schedule1 = ["Math", " English", " Programming"];
let schedule2 = ["Geography", " Spanish", " Programming"];

function checkSchedule(schedule1, schedule2) {
  return schedule1.some((periksa) => schedule2.includes(periksa));
}

console.log(checkSchedule(schedule1, schedule2));

document.getElementById("scheduleDayOne").innerHTML = schedule1;
document.getElementById("scheduleDayTwo").innerHTML = schedule2;
document.getElementById("sameSchedule").innerHTML = checkSchedule(schedule1, schedule2);

// soal no 5
let twitter = [];
function uploadTweet() {
let tweet = document.getElementById("words").value;
twitter.push(tweet)

document.getElementById("yourTweet").innerHTML = twitter;
}

// soal No 6
function showData() {
let uname =document.getElementById("usrnm").value;
let password = document.getElementById("pwwd").value;
if (password.type === "password") {
password.type = "text";
  } else {
    password.type = "password";
  }
  document.getElementById("data").innerHTML= uname + ' & ' + password;
}
