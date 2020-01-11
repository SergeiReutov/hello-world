/*
 * Subtask-3. Деструктуризация.
 *
 * Представьте, что ваша функция принимает объект, и ей нужно работать с полями этого объекта по-отдельности.
 * Это называется деструктуризацией объекта. Раньше это делали так:
 */

function destructuring(obj) {
  const a = obj.a;
  const b = obj.b;  // и так далее
}

// А еще не всегда в объекте есть те поля, которые ты там ждешь.
// Поэтому при деструктуризации добавляли дефолтное значение для полей:

function destructuringWithDefault(obj) {
  const a = obj.a || 'Alex';
  const b = obj.b || 28;
}

// Но это утомительно. Зачастую таких полей много и ты пишешь кучу строк почти одинакового кода.
// К счастью, в версии языка ES6 добавили крутую возможность деструктуризации. Делается так:

function newDestructuring(obj) {
  const { a = 'Alex', b = 28 } = obj;
}

// Так проще и нагляднее.

/*
 * Задание 3.1: написать функцию component, которая принимает объект props с полями
 * 
 *   name: string,
 *   isLoading: boolean,
 *   error: string || null
 * 
 * и возвращает
 * 
 * 'Loading...' - если isLoading === true
 * `Error: ${error}` - если isLoading === false и error !== null
 * `Hello, ${name}!` - если isLoading === false и error === null
 * 
 * Добавить дефолтные значения:
 *
 * isLoading: false
 * error: null
 * 
 * То есть, если я вызову component({ name: 'Alex' }), то ожидаю увидеть 'Hello, Alex!'
 */

function component(props) {
  const { name, isLoading = false, error = null } = props;
  if (isLoading) {
    return 'Loading...';
  }
  if (error !== null) {
    return `Error: ${error}`;
  }
  return `Hello, ${name}!`;
}
