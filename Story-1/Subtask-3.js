/*
 * Subtask-3. Условный return
 * Пример: необходимо написать функцию 'moreThanFive', которая принимает число
 * и возвращает 'Yes', если число больше 5, и 'No', если меньше (или равно).
 * То есть moreThanFive(1) = 'No', moreThanFive(7) = 'Yes'
 * Написать Functional Declaration и Arrow Function
 * Написать несколько тестов для этой функции
 */

// Можно использовать обычный if-else
function moreThanFive(x) {
  if (x > 5) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// Если ветка 'true' заканчивается return'ом, то 'else' даже писать не обязательно
// ведь return все равно закончит выполнение функции

function moreThanFive(x) {
  if (x > 5) {
    return 'Yes';
  }
  return 'No';
}

// Но если условие очень простое и не выполняется никаких дополнительных действий, а сразу return
// то можно использовать тернарный оператор (условие ? true : false)

const moreThanFive = (x) => x > 5 ? 'Yes' : 'No';

// Tests
console.log(`moreThanFive(2) = ${moreThanFive(2)}`);
console.log(`moreThanFive(9) = ${moreThanFive(9)}`);

/*
 * Задание 3.1: написать функцию 'printSign', которая принимает boolean 'isPositive' (true или false)
 * и возвращает '+', если true, и '-', если false
 * То есть printSign(true) = '+' и printSign(false) = '-'
 * Написать Functional Declaration (через if-else) и Arrow Function (через ternary return)
 * Написать несколько тестов для этой функции
 * 
 * Очередное написанное правило:
 * любая переменная типа boolean должна начинаться с 'is' или 'has':
 * isPositive, isNew, hasEmail и т.д.
 *
 * Кстати, в условии писать if (isPositive === true) не обязательно, JavaScript сам приводит тип
 * То есть достаточно просто if (isPositive) ...
 */

/*
 * Задание 3.2: написать функцию 'printNumberWithSign', которая принимает число [num] и boolean 'isPositive'
 * и возвращает '+[num]', если isPositive = true, и '-[num]', если isPositive = false
 * То есть printNumberWithSign(1, true) = '+1' и printNumberWithSign(2, false) = '-2'
 * Да, printNumberWithSign(-1, false) = '--1', но давайте не искать глубокого философского смысла в учебных заданиях
 * Использовать свою функцию printSign
 * Написать Functional Declaration (через if-else) и Arrow Function (через ternary return)
 * Написать несколько тестов для этой функции
 */

/*
 * Задание 3.3: написать функцию 'renderNameWithTitle', которая принимает строку [name] и boolean 'isMale'
 * и возвращает блок (если isMale = true)
 * 
 * <div className='title'>
 *   Hello, Mr.[name]!
 * </div>
 * 
 * 
 * и блок (если isMale = false)
 * 
 * <div className='title'>
 *   Hello, Ms.[name]!
 * </div>
 * 
 * Написать Functional Declaration (через if-else) и Arrow Function (через ternary return)
 * Написать несколько тестов для этой функции
 */