const initianalState = {
  data: [{
      id: 1,
      checked: false,
      name: 'Проверка'},
    {
      id: 2,
      checked: false,
      name: 'Тестовая задача'},
    {
      id: 3,
      checked:false,
      name: 'Тестовая задача'}]
}

const reducer = (state = initianalState, action) => {
  switch(action.type) {
    case 'GET':
      action.payload
        .then(res => res.json())
        .then(res => {
          return {
            ...state,
            res,
          }
        })
    default: return state;
  }
}

export default reducer;
