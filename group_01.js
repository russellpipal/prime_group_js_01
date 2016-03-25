var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

for(var i = 0; i<employees.length; i++) {
  console.log(calculateBonus(employees[i]));
}

function Person(name, number, salary, rating){
  this.name = name;
  this.number = number;
  this.salary = salary;
  this.rating = rating;
}

function Bonus(name, percent, compensation, bonusAmt){
  this.name = name;
  this.percent = percent;
  this.compensation = compensation;
  this.bonusAmt = bonusAmt;
}

function calculateBonus(employee) {
  var bonus = 0;
  var empName = employee.name;
  var empNumber = employee.number;
  var salary = parseInt(employee.salary);
  var rating = employee.rating;

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

  var percentString = bonus.toString()+"%"
  var percentBonus = bonus/100;
  var totalCompensation = "$" + ((salary * percentBonus) + salary).toLocaleString()
  var bonusAmount = "$" + (Math.round(salary * percentBonus).toLocaleString())

  return new Bonus(employee.name, percentString, totalCompensation, bonusAmount);
}
