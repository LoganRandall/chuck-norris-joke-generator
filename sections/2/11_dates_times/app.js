let val;

const today = new Date();
let birthday = new Date('5-27-1979 06:30:00');
birthday = new Date('5/27/1979 06:30:00');

// get month index/0 based
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getTime();

// setting time to a specific value
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1980);




console.log(birthday);