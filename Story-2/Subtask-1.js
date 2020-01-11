/*
 * Subtask-1. Объекты: основы
 * Пример: необходимо создать объект mouse с полями name: 'Mickey' и color: 'black'
 * К готовому объекту добавить поля height: 50, weight: 3 и isFunny: true
 * Проверить полученный объект
 * Мой код не копируем, пишем все сами ручками. Задания простые, они направлены на то,
 * чтобы вы довели некоторые базовые вещи до автоматизма.
 */

const mouse = {
  name: 'Mickey',
  color: 'black'
};

// К полям объекта можно обращаться через точку (так пишут чаще всего)
mouse.height = 50;
// либо в форме объект['поле']
mouse['weight'] = 3;
// при чем в такой форме можно использовать переменные типа string
const field = 'isFunny';
mouse[field] = true;

// Проверим, что получилось в итоге
console.log(mouse);

/*
 * Задание 1.1: создать объект cat с полями name: 'Tom' и height: 100.
 * К готовому объекту добавить поля
 * age: 8
 * hasFriend: true
 * friend: объект с полями
 *   type: 'mouse'
 *   name: 'Jerry'
 * 
 * Использовать все три вида обращения к полям.
 * Проверить полученный объект.
 */

const cat = {
  name: 'Tom',
  height: 100
};

cat.age = 8;
cat['hasFriend'] = true;
const fieldToAdd = 'friend';
cat[fieldToAdd] = {
  type: 'mouse',
  name: 'Jerry'
};

/*
 * Задание 1.2: написать функцию getFriendName, которая принимает на вход объект cat.
 * Функция должна возвращать имя друга (в нашем случае - 'Jerry'), если hasFriend = true,
 * и строку 'Tom has no friend :(', если hasFriend = false.
 * Разумеется, Tom - это мы взяли поле name из того же объекта.
 */

const getFriendName = cat => cat.hasFriend ? cat.friend.name : 'Tom has no friend :(';

/*
 * Задание 1.3: добавить в объект cat поле
 * owner: объект с полями
 *   type: 'person'
 *   name: 'Old lady'
 * 
 * Написать функцию getOwnerName, которая принимает на вход объект cat.
 * Функция должна возвращать имя хозяина (в нашем случае - 'Old lady'), если такое поле вообще существует
 * и строку 'Tom is all by himself', если такого поля нет.
 * 
 * Проверить, что с текущим объектом cat функция вернет 'Old lady'.
 * Удалить поле owner.
 * Проверить, что теперь функция вернет 'Tom is all by himself'.
 */

cat.owner = {
  type: 'person',
  name: 'Old lady'
};

const getOwnerName = cat => cat && cat.owner && cat.owner.name
  ? cat.owner.name
  : 'Tom is all by himself';

/*
 * Задание 1.4: создать объект person с полем name: 'Harold'
 * К готовому объекту добавить поля
 * superPower: 'run'
 * run: функция, которая не принимает параметров и возвращает строку 'I can run fast!'
 * fly: функция, которая не принимает параметров и возвращает строку 'Look, mom, I can fly!'
 * 
 * Написать функцию useSuperPower, которая принимает на вход объект person
 * и возвращает строку из указанной суперсилы. Если указанной суперсилы нет - вывести строку 'No superPower!'
 * То есть:
 *  - если person.superPower = 'run', то useSuperPower(person) = 'I can run fast!'
 *  - если person.superPower = 'fly', то useSuperPower(person) = 'Look, mom, I can fly!'
 *  - если person.superPower = 'swim', то useSuperPower(person) = 'No superPower!'
 */

const person = {
  name: 'Harold'
};

person.superPower = 'run';
person.run = () => 'I can run fast!';
person.fly = () => 'Look, mom, I can fly!';

const useSuperPower = person => person[person.superPower]
  ? person[person.superPower]()
  : 'No superPower!';