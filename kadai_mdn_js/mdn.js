//const today = new Date();
//
//console.log(today);

const date = new Date;

let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();

let currentDate = `${year}年 ${month}月 ${day}日`;
console.log(currentDate);