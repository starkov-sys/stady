
let mission = 500000;


let question = Number(prompt('Ваш месячный доход?'));
console.log(typeof question);

let addExpenses = (prompt ('Перечислите возможные расходы за рассчитываемый период через запятую:'));
console.log(typeof addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = Number(prompt('Во сколько это обойдется?'));

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = Number(prompt('Во сколько это обойдется?'));

let budgetMonth = question - (amount1 + amount2);
console.log(budgetMonth);

let realPer = mission/budgetMonth;
console.log(Math.round(realPer));

let budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay));

if (budgetMonth >= 1200){
    console.log('У Вас высокий уровень дохода.')

} else if (budgetMonth >=600 || budgetMonth<=1200){
    console.log('У вас средний уровень дохода.')

} else if (budgetMonth >= 0 || budgetMonth<=600){
console.log('У вас низкий уровень дохода.')

}else if (budgetMonth<0){
    console.log('Что то пошло не так')
}

let getExpensesMonth = function(){

console.log(amount1 + amount2, 'Расходы за месяц');
}

getExpensesMonth();

let getAccumulatedMonth = function(){
    console.log(Number(question - getExpensesMonth, 'Остаток за месяц'));
}

getAccumulatedMonth();