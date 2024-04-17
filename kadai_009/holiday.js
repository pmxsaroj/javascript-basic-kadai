holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
for (i = 1; i <= holidays; i++){
console.log(i);
}

let day = 1;
while (day < holidays){
console.log(day);
day++;
}
console.log(holidays);


let days = 0;

while (days < holidays.length) {
  console.log(holidays[days]);
  days++;
}
