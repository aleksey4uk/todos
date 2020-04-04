const initianalState = {
  data: []
}

const reducer = (state = initianalState, action) => {
  switch(action.type) {
    case 'LOAD':
      return {
        ...state,
        data: action.payload,
        loading: true};

    case 'COMPLETE':
      console.log(state)
      return {
        ...state,
        loading: false,
      }

    case 'DELETE':
      console.log("удаляем элемент: ", action.payload);
      const idx = state.data.findIndex((item)=>item.id ===action.payload)
      return {
        ...state,
        data: [
          ...state.data.slice(0, idx),
          ...state.data.slice(idx+1)
        ]
      }

    case 'ADD':
      console.log("добавляем");
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }

    case 'EDIT':
      console.log("Редактируем");
      const idxRead = state.data.findIndex(item=> item.name === action.payload);
      return {
        ...state,

      }

    case 'CHECKED':
      console.log("ОТМЕТИЛИ ", action.paylaod);
      const idxCheck = state.data.findIndex(item=> item.id === action.payload);
      return {
        ...state,
      }

    default: return state;
  }
}

export default reducer;
