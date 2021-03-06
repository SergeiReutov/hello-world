/*
 * Subtask-4. Git Hooks
 * 
 * Git Hooks - это скрипты, которые можно прикрутить к определенным действиям в Git.
 * Самый очевидный и широко используемый пример - hook для push - pre-push, то есть он выполняется прямо перед тем,
 * как вы пушите свои изменения на GitHub.
 * В этот pre-push hook записывают выполнение ESLint и прогон всех тестов. Если все прошло успешно - push идет своим чередом.
 * Если где-то косяки - вывалится ошибка в консоль и push не пройдет. Придется исправлять.
 *
 * Это невероятно удобно, потому что это заставляет программиста выполнять все тесты и проверять стиль кода перед тем,
 * как он отправляет свои изменения в общий репозиторий.
 * 
 * Прикручивать git hooks своими руками - это тот еще гемморрой. На наше счастье есть крутая библиотека husky:
 *
 * npm install husky
 *
 * Теперь в package.json на главный уровень (по соседству с "scripts") добавляем такой объект:
 *
 * "husky": {
 *   "hooks": {
 *     "pre-push": "npm run eslint && npm test"
 *   } 
 * },
 *
 * Теперь перед вашим push'ем будет проверка на ESLint и будут запускаться все тесты. Если где-то есть ошибки - push не пройдет (можете попробовать).
 */
