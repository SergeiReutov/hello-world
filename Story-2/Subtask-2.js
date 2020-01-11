/*
 * Subtask-2. Иммутабельность и оператор spread.
 *
 * Объекты - это Reference Type. Их отличие от String, Number и Boolean в том, что они передаются в функции по ссылке.
 * Это значит следующее:
 */

const num = 1;
const obj = { a: 1 };

function changeNum(param) {
  param++; // оператор '++' увеличивает значение переменной на единицу
}

function changeObj(param) {
  param.b = 2;
}

changeNum(num);
console.log(num); // вернет по-прежнему 1, переменная 'a' не поменяла своего значения

changeObj(obj);
console.log(obj); // вернет { a: 1, b: 2 }, переменная obj поменялась после выполнения функции

/*
 * Это происходит из-за того, что объекты передаются в функции по ссылке. То есть функция получает не значение
 * объекта, а ссылку на него. Любое изменение приведет к изменению самого объекта.
 * ЭТО ПЛОХАЯ ПРАКТИКА!
 * Ваши функции не должны изменять свои параметры. Обе функции changeNum и changeObj - дрянь, не пишите так.
 * Даже не смотря на то, что changeNum по факту ничего не изменила, любое изменение параметров внутри функции - не годится.
 * 
 * Тогда логично задать вопрос: а что делать, если надо все-таки поменять объект?
 * Все просто: создайте новый. Заполните его теми же полями, что и первый, плюс ваши изменения.
 * В Subtask-1 мы видоизменяли наши объекты, но это только в учебных целях. Разумеется,
 * намного проще было бы сразу создать готовый объект, а не добавлять поля к уже готовому.
 * 
 * Для того, чтобы создавать такой же объект, как и старый, в JS есть очень удобный оператор spread.
 * Он выглядит так: '...' - ага, три точки.
 * Использовать его можно так:
 */
const object = {
  a: 1,
  b: 2
};

const newObject = {
  ...object // это можно прочитать как 'заполни объект полями из object'
};

console.log(newObject); // будет { a: 1, b: 2 }, но это уже другой объект!

// А еще можно добавлять новые свойства, либо изменять существующие:

const changedObject = {
  ...object,
  a: 0,
  c: 3
};

console.log(changedObject); // будет { a: 0, b: 2, c: 3 }

// Обратите внимание, что если вы изменяете существующие поля, то важен порядок, в котором вы напишете их.
// То значение, что будет написано последним перезапишет предыдущие

const notChangedObject = {
  a: 0,
  ...object
};

console.log(notChangedObject);  // будет { a: 1, b: 2 } - поле 'a' сначала было 0, но потом мы записали поверх
// поля объекта object, в которых 'a' было равно 1. Вот и в итоговом объекте 'a' равно 1.

/*
 * Почитайте вот эту статью, начиная с абзаца 'Объект литералы'
 * https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825#6846
 */

/*
 * Пример: создать объект personAlex с полями
 * name: 'Alex'
 * age: 28
 * 
 * Написать функцию changeName, которая принимает два параметра:
 * newName - новое имя
 * person - объект, в котором необходимо поменять имя
 * 
 * То есть changeName('Boris', personAlex) вернет { name: 'Boris', age: 28 }
 */

const personAlex = {
  name: 'Alex',
  age: 28
};

function changeName(newName, person) {
  return {
    ...person,
    name: newName
  };
}

const personBoris = changeName('Boris', personAlex);

console.log(personBoris);

/*
 * Задание 2.1: создать объект initialState с полями
 * name: '' (пустая строка)
 * isLoading: false,
 * error: null
 *
 * Написать три функции: changeName, changeIsLoading, changeError.
 * Все они принимают два параметра: новое значение и объект, где нужно поменять соответствующее поле.
 * То есть changeName принимает newName и state
 * changeIsLoading - newIsLoading и state
 * changeError - newError и state
 * 
 * С помощью этих функций создать такие объекты: (не вручную, а именно получить из initialState)
 *
 * loadingState = {
 *   name: '',
 *   isLoading: true,
 *   error: null
 * }
 * 
 * errorState = {
 *   name: '',
 *   isLoading: false,
 *   error: 'Oops!'
 * }
 * 
 * invalidState = {
 *   name: 'Alex',
 *   isLoading: false,
 *   error: 'God damn it'
 * }
 */

const initialState = {
  name: '',
  isLoading: false,
  error: null
};

const changeName = (newName, state) => ({
  ...state,
  name: newName
});

const changeIsLoading = (newIsLoading, state) => ({
  ...state,
  isLoading: newIsLoading
});

const changeError = (newError, state) => ({
  ...state,
  error: newError
});

/*
 * Задание 2.2: написать функцию reducer, которая принимает два параметра:
 * action: объект с полями
 *   type: строка, возможны три варианта - 'name', 'isLoading', 'error'
 *   data: поле неизвестного типа, может быть разным в зависимости от type
 * state: объект с такими же полями, как и initialState из задания 2.1
 *
 * функция должна объединить ваши предыдущие три функции. Хочу так:
 */

const action1 = {
  type: 'name',
  data: 'Boris'
};

console.log(reducer(action1, initialState)); // должен вернуть { name: 'Boris', isLoading: false, error: null }

const action2 = {
  type: 'isLoading',
  data: true
};

console.log(reducer(action2, initialState)); // должен вернуть { name: 'Alex', isLoading: true, error: null }

// Использовать оператор switch.

const reducer = (action, state) => {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: data
      };
    case 'isLoading':
      return {
        ...state,
        isLoading: data
      };
    case 'error':
      return {
        ...state,
        error: data
      };
    default:
      return state;
  }
}
/*
 * Задание 2.3: написать три функции:
 * setName - принимает параметр newName и возвращает объект { type: 'name', data: newName }
 * setIsLoading - принимает параметр newIsLoading и возвращает объект { type: 'isLoading', data: newIsLoading }
 * setError - принимает параметр newError и возвращает объект { type: 'error', data: newError }
 */

const setName = newName => ({
  type: 'name',
  data: newName
});

const setIsLoading = newIsLoading => ({
  type: 'isLoading',
  data: newIsLoading
});

const setError = newError => ({
  type: 'error',
  data: newError
});
