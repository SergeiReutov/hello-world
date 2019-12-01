/*
 * Subtask-4. Главное задание. Объединим все вышенаписанное.
 *

Чтобы как-то приблизить это к реальным проектам, сделаем такую задачу:

Создать приветственный Header для пользователя.
Надо написать функцию renderHeader, которая принимает
string [name] - имя пользователя
boolean [isMale] - мужчина ли он
boolean [isFirstTime] - пришел ли пользователь на сайт впервые,

а возвращает блок HTML.

Сценарий 1:
Пользователь зашел на сайт впервые. Ввел имя 'Sergei' и 'isMale' = true.
renderHeader('Sergei', true, true);
Хочу получить в ответ:

<div className='header'>
  <div>Hello, Mr. Sergei!</div>
  <div>Welcome to Smithy!</div>
</div>


Сценарий 2:
Пользователь на сайте не в первый раз. Ввел имя 'Olena' и 'isMale' = false.
renderHeader('Olena', false, false);
Хочу получить в ответ:

<div className='header'>
  <div>Hello, Ms. Olena!</div>
  <div>Glad to see you back!</div>
</div>


 *
 * Не писать одной портянкой кода! Разбивать на мелкие функции и комбинировать их!
 * Написать все через Arrow Functions
 * Написать несколько тестов для этой функции
 */