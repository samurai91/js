"use strict";

let i = 0;
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: {},
  savings: false
};

for (i = 0; i < 2; i++) {
  let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', ''),
      firstLet  = prompt('Во сколько обойдется?', '');

  if ( (typeof(firstQuestion)) === 'string' && (typeof(firstQuestion)) != null && (typeof(firstLet)) != null && firstQuestion != '' && firstLet != '') {
     console.log("успех");
     appData.expenses[firstQuestion] = firstLet;
  } else {
    console.log("так не пойдет");
    i--;
  }
};

/* while (i < 2) {
  let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', ''),
      firstLet  = prompt('Во сколько обойдется?', '');

  if ( (typeof(firstQuestion)) === 'string' && (typeof(firstQuestion)) != null && (typeof(firstLet)) != null && firstQuestion != '' && firstLet != '') {
    console.log("успех");
    appData.expenses[firstQuestion] = firstLet;
  } else {
    console.log("так не пойдет");
    i--;
  }
  i++;
};
 */

/* do {
  let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце', ''),
      firstLet  = prompt('Во сколько обойдется?', '');

  if ( (typeof(firstQuestion)) === 'string' && (typeof(firstQuestion)) != null && (typeof(firstLet)) != null && firstQuestion != '' && firstLet != '') {
    console.log("успех");
    appData.expenses[firstQuestion] = firstLet;
  } else {
    console.log("так не пойдет");
    i--;
  }
  i++;
}
while (i < 2); */



appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 500) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка')
}