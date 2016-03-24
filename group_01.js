var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

for(var i = 0; i<employees.length; i++) {
  console.log(calculateBonus(employees[i]));
}


function calculateBonus(employee) {
  var bonus = 0;
  var empName = employee[0];
  var empNumber = employee[1];
  var salary = parseInt(employee[2]);
  var rating = employee[3];



  switch(rating) {
    case 3:
    bonus = 4;
    break;
    case 4:
    bonus = 6;
    break;
    case 5:
    bonus = 10;
    break;
  }

if(empNumber.length === 4) {
  bonus += 5;
}
//We added the bonus > 0 to prevent the possiblity of negative bonuses
if(salary > 65000 && bonus>0) {
  bonus -= 1;
}
if(bonus>13) {
  bonus = 13;
}
var result = [];

result.push(empName);
result.push(bonus.toString()+"%");
var percentBonus = bonus/100;
result.push("$" + ((salary * percentBonus) + salary).toString());
result.push("$" + (Math.round(salary * percentBonus).toString()));
return result;

}
