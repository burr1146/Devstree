
let weeklyArray = ["Fri", "Mon", "Sun"];

let mon_start_time = 10;
  let tue_start_time = 9;
  let wed_start_time = 11;
  let thu_start_time = 25;
  let fri_start_time = 14;
  let sat_start_time = 16;
  let sun_start_time = 50;

  let dayTime = {
    mon_start_time : 10,
    tue_start_time : 9,
    wed_start_time : 11,
    thu_start_time : 25,
    fri_start_time : 14,
    sat_start_time : 16,
    sun_start_time : 50,
  }

let result = weeklyArray.map((value) => {
 for(let i=0;i<Object.keys(dayTime).length;i++){
    if(value.toLowerCase()==Object.keys(dayTime)[i].slice(0,3)){
        return {name:value,start_time:Object.values(dayTime)[i]};
    }
 }
})

console.log(result);
