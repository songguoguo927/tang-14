
// var grade = prompt("请输入高考成绩");
// grade = parseInt(grade);
var grade = 155;
switch(grade){  
    case grade<200:
//    alert("未考上大学");
console.log("111");
    break;
    case grade<330&&grade>201:
   alert("上专科院校");
    break;
    case grade<440&&grade>331:
   alert("上普通本科院校");
    break;
    case grade<700&&grade>441:alert("上本一批院校");
    break;
    case grade>701:
   alert("大学随便挑");
    break;
    default:;
}
