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

let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце'),
    firstLet  = prompt('Во сколько обойдется?');

appData.expenses.firstQuestion = firstLet;

let secondQuestion = prompt('Введите обязательную статью расходов в этом месяце'),
    secondLet  = prompt('Во сколько обойдется?');

appData.expenses.secondQuestion = secondLet;

alert("Ваш бюджет на 1 день: " + (money / 30) );
