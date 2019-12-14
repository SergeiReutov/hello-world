/*
 * Subtask-1. Учимся создавать переменные и функции
 * Пример: необходимо написать функцию 'square', которая принимает число и возвращает в ответ квадрат этого числа
 * Написать Functional Declaration, Functional Expression и Arrow Function
 * Написать несколько тестов для этой функции
 * Пока что не будем писать проверку для параметров. Считаем, что на вход всегда передают то, что ожидается
 * (то есть если ждем на вход число, то туда не придет строка, объект или что-то еще)
 */

// Functional Declaration
function square(x) {
  return x * x;
}

// Functional Expression
// const square = function(x) {
//   return x * x;
// }

// Arrow Function
// const square = (x) => x * x;

// Tests
// Нельзя использовать одинаковые имена для описания функций, так что в таком виде это работать не будет
// Закомментируйте любые два способа и тогда запускайте
// В VSCode комментировать можно так: выделите кусок текста и нажмите Ctrl+K и затем Ctrl+C
// Чтобы раскомментировать обратно: Ctrl+K - Ctrl+U
// Для запуска файла в терминале перейдите в папку с проектом и наберите "node Subtask-1.js"

// console.log('square(2) = ' + square(2));
// console.log('square(0) = ' + square(0));
// console.log('square(5) = ' + square(5));

/*
 * Задание 1.1: написать функцию 'sum', которая принимает два числа и возвращает их сумму
 * То есть sum(1, 1) = 2, sum(2, 3) = 5 и т.д.
 * Написать Functional Declaration, Functional Expression и Arrow Function
 * Написать несколько тестов для этой функции
 */

function sum(a, b) {
  return a + b;
}

/*
 * Задание 1.2: написать функцию 'strLength', которая принимает строку и возвращает число - сколько символов в этой строке
 * То есть, strLength('a') = 1, strLength('aaa') = 3 и т.д.
 * Написать Functional Declaration и Arrow Function
 * Functional Expression писать не нужно - так пишут редко, поскольку у такого способа нет преимуществ
 * Написать несколько тестов для этой функции
 */

function strLength(str) {
  return str.length;
}

/*
 * Задание 1.3: написать функцию 'strPassword', которая принимает строку и возвращает строку той же длины, состоящей только из звездочек ('*')
 * То есть, strPassword('a') = '*', strPassword('aaa') = '***' и т.д.
 * Использовать свою же функцию strLength
 * Написать Functional Declaration и Arrow Function
 * Написать несколько тестов для этой функции
 */

function strPassword(str) {
  return '*'.repeat(strLength(str));
}

/*
 * Задание 1.4: написать функцию strLengthSum, которая принимает две строки и возвращает сумму их длин
 * То есть strLengthSum('a', 'b') = 2, strLengthSum('aa', 'bb') = 4 и т.д.
 * Использовать свои функции strLength и sum
 * Написать Functional Declaration и Arrow Function
 * Написать несколько тестов для этой функции
 */

function strLengthSum(str1, str2) {
  return sum(strLength(str1), strLength(str2));
}
