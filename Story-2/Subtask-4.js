/*
 * Задание 4.1: Redux-flow
 * Теперь объединим все это в один большой механизм.
 * Будьте внимательны, функции ПОЧТИ такие же, как и раньше, но в них есть изменения.
 * Так что просто скопировать не прокатит. Пишите по-новой, набивайте руку.
 *
 * Суть такая:
 *
 * 
 * 1. создаем объект initialState с полями
 *   name: '',
 *   isLoading: false,
 *   error: null
 *
 * давайте для простоты обозначим структуру State:
 * {
 *   name: string,
 *   isLoading: boolean,
 *   error: string || null
 * }
 * 
 * 
 * 2. пишем три функции
 * setName - принимает name и возвращает { type: 'SET_NAME', name }
 * setIsLoading - принимает isLoading и возвращает { type: 'SET_IS_LOADING', isLoading }
 * setError - принимает error и возвращает { type: 'SET_ERROR', error }
 * 
 * структура Action:
 * {
 *   type: string,
 *   [другие поля могут варьироваться. В нашем случае это может быть либо name, либо isLoading, либо error]
 * }
 * 
 * 
 * 3. пишем функцию reducer, которая принимает два параметра:
 * action (со структурой Action)
 * state (со структурой State)
 *   
 * и возвращает новый объект структуры State:
 * если action.type === 'SET_NAME', то вернуть state с новым name, а также isLoading = false и error = null
 * если action.type === 'SET_IS_LOADING', то вернуть state с новым isLoading, а также name = '' и error = null
 * если action.type === 'SET_ERROR', то вернуть state с новым error, а также name = '' и isLoading = false
 * 
 * 
 * 4. пишем функцию renderComponent, которая принимает объект структуры State и возвращает
 *
 * <div className="myComponent">
 *   <div className="loader">Loading...</div>
 * </div>
 * 
 * если isLoading === true
 * 
 * <div className="myComponent">
 *   <div className="error">Error: {error}</div>
 * </div>
 * 
 * если isLoading === false и error !== null
 * 
 * <div className="myComponent">
 *   <div className="name">Hello, {name}!</div>
 * </div>
 * 
 * если isLoading === false и error === null
 * 
 * Добавить дефолтные значения
 * isLoading: false
 * error: null
 * 
 * 
 * 5. выполняем!
 * Разбиваем на такие шаги:
 * 
 * const loadingAction = setIsLoading(true);
 * const loadingState = reducer(loadingAction, initialState);
 * renderComponent(loadingState);
 * 
 * ожидаю увидеть вот тот кусок с Loading...
 * 
 * const errorAction = setError('Cannot load name');
 * const errorState = reducer(errorAction, loadingState); // обратите внимание, что используем предыдущий state
 * renderComponent(errorState);
 * 
 * ожидаю увидеть кусок с Error
 * 
 * const nameAction = setName('Alex');
 * const nameState = reducer(nameAction, errorState);
 * renderComponent(nameState);
 * 
 * ожидаю увидеть кусок с Hello
 */

const initialState = {
  name: '',
  isLoading: false,
  error: null
};

const setName = name => ({
  type: 'SET_NAME',
  name
});

const setIsLoading = isLoading => ({
  type: 'SET_IS_LOADING',
  isLoading
});

const setError = error => ({
  type: 'SET_ERROR',
  error
});

const reducer = (action, state) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
        isLoading: initialState.isLoading,
        error: initialState.null
      };
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
        name: initialState.name,
        error: initialState.error
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
        name: initialState.name,
        isLoading: initialState.isLoading
      };
    default:
      return state;
  }
}

function renderComponent(props) {
  const { name, isLoading = false, error = null } = props;
  if (isLoading) {
    return '<div className="myComponent">\n  <div className="loader">\n    Loading...\n  </div>\n</div>';
  }
  if (error !== null) {
    return `<div className="myComponent">\n  <div className="error">\n    Error: ${error}\n  </div>\n</div>`;
  }
  return `<div className="myComponent">\n  <div className="error">\n    Hello, ${name}!\n  </div>\n</div>`;
}

const loadingAction = setIsLoading(true);
const loadingState = reducer(loadingAction, initialState);
renderComponent(loadingState);

const errorAction = setError('Cannot load name');
const errorState = reducer(errorAction, loadingState);
renderComponent(errorState);

const nameAction = setName('Alex');
const nameState = reducer(nameAction, errorState);
renderComponent(nameState);