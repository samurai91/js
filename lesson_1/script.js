"use strict";

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: {},
  savings: false
};

let expenses = [
  'Введите обязательную статью расходов в этом месяце',
  'Во сколько обойдется?'
];
let i = 0;

for (i = 0; i < 2; i++) {
  prompt(expenses[0]);
  prompt(expenses[1]);
}

alert("Ваш бюджет на 1 день: " + (money / 30) );