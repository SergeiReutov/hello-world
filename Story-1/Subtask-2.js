/*
 * Subtask-2. Конкатенация (сложение) строк
 * Пример: необходимо написать функцию 'printName', которая принимает строку [name] и возвращает 'Name: [name]'
 * То есть printName('Sergei') = 'Name: Sergei'
 * Написать Functional Declaration и Arrow Function
 * Написать несколько тестов для этой функции
 */

// Строки можно складывать "старым" способом - точно так же, как числа
function printName(name) {
  return 'Name: ' + name;
}

// Но сейчас так пишут редко. Проще использовать строковые литералы
// Обратите внимание, что это не обычные одинарные кавычки, а обратная кавычка, она на клавише 'ё'
// const printName = (name) => `Name: ${name}`;

// Tests
// console.log('printName("Sergei") = ' + printName('Sergei'));
// console.log(`printName('Alex') = ${printName('Alex')}`);

/*
 * Задание 2.1: написать функцию 'printHello', которая принимает строку [name] и возвращает 'Hello, [name]!'
 * То есть printHello('Janusz') = 'Hello, Janusz!'. Да, Януш - это польское имя, все верно.
 * Написать Functional Declaration (обычным сложением строк) и Arrow Function (строковым литералом)
 * Написать несколько тестов для этой функции
 */

function printHello(name) {
  return `Hello, ${name}!`;
}

/*
 * Задание 2.2: написать функцию 'renderName', которая принимает строку [name] и возвращает такой блок (как строку):
 *
 * <div className='header'>
 *   Hello, [name]!
 * </div>
 * 
 * Использовать свою функцию printHello
 * 
 * Для переноса строки при выводе поставьте символ '\n'.
 * Например:
 * console.log('<div>\n</div>');
 * <div>
 * </div>
 * 
 * Написать Functional Declaration (обычным сложением строк) и Arrow Function (строковым литералом)
 * Написать несколько тестов для этой функции
 * 
 * Кстати, на будущее: есть неписанное правило среди разработчиков React:
 * любая функция, которая возвращает HTML, должна называться начиная с 'render':
 * renderHeader, renderFooter и т.д.
 */

function renderName(name) {
  return `<div className='header'>\n  ${printHello(name)}\n</div>`;
}