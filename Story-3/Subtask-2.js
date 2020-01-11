/*
 * Subtask-2. ESLint + export
 * 
 * ESLint - это такая утилита для проверки стиля вашего кода.
 * Понятно, что каждый программист пишет слегка по-разному. Кто-то ставит пробелы перед параметрами функции, кто-то нет,
 * кто-то пишет строки в одинарных кавычках, кто-то - в двойных, и так далее.
 * Само собой, в больших проектах это недопустимо. Иначе это быстро превратиться в бардак.
 * Поэтому используют ESLint - у него есть файл конфигурации, в котором можно задавать правила для стиля кода.
 * После написания вашего кода запускается проверка и вы получите сообщение об ошибках, если они есть.
 * Более того, можно поставить расширение для VSCode и видеть эти косяки в реальном времени. Огонь, да?
 * 
 * Короче, погнали.
 * 
 * Установите ESLint:
 * 
 * npm install eslint
 * 
 * В этом Pull Request я добавил в корневой каталог файл .eslintrc
 * Это конфигурационный файл для ESLint. Обычно его настраивают где-то ближе к началу проекта и
 * обычно это делают более опытные разработчики. Если интересно, что там можно делать, то вам сюда:
 * 
 * https://eslint.org/docs/user-guide/configuring
 * 
 * (Спойлер: куча разных настроек, упарываться в детали нет смысла. Я буду добавлять некоторые правила, если
 * мне не будет что-то нравится в написании вашего кода.)
 *
 * Пока что я добавил несколько правил:
 * 
 * "max-len": ["error", { "code": 120, "comments": 150 }] - ограничивает длину строки
 * "semi": ["error", "always"] - требует точку с запятой в конце выражений
 * "no-console": 1 - выдаст warning, если напишите любое выражение с console (.log, .error и т.д.)
 * 
 * warning отличается от error тем, что ESLint выдаст предупреждение, но считать ошибкой это не будет.
 * В дальнейшем эта разница станет более понятной. 
 * 
 * В package.json в объект "scripts" добавьте
 *
 * "eslint": "eslint **\\*.js"
 *
 * Запустим ESLint: в терминале выполните
 *
 * npm run eslint
 *
 * В ответ вы увидите кучу всяких проблем. Там будет описание ошибки и файл, где ее нашли.
 * Не стесняйтесь пользоваться переводчиком, описание ошибки всегда очень точно отражает, в чем там проблема.
 * 
 * Например:
 * 
 * error  'strLength' is defined but never used  no-unused-vars
 * 
 * Он говорит, что идентификатор 'strLength' был описан, но ни разу не использовался,
 * то есть это бесполезное описание функции. Мы поправим это чуть дальше.
 * 
 * Давайте установим плагин для VSCode.
 * Зайдите в плагины в левом меню и найдите ESLint (думаю, не перепутаете, там почти 7 лямов загрузок у него)
 * Установите и откройте по-новой ваши файлы Subtask-1, Subtask-2 и т.д.
 * Вы увидите, как ошибки подчеркиваются красным маркером. Описание ошибки при наведении на нее. Удобно, да?
 * 
 * После уборки у вас должны были остаться ошибки только от правила "no-unused-vars"
 * Чтобы их исправить, давайте все написанные функции экспортируем. Тем более, нам это потом пригодится для тестов.
 * В качестве примера возьмем Subtask-1. В самом конце файла допишите следующее:
 * 
 * module.exports = {
 *  square,
 *  sum,
 *  strLength,
 *  strPassword,
 *  strLengthSum
 * };
 *
 * Аналогично экспортируйте все функции из Subtask-2, Subtask-3 и Subtask-4.
 * 
 * Проверьте, что теперь
 * 
 * npm run eslint
 * 
 * не выдает никаких ошибок. Если все еще выдает - исправляйте.
 */
