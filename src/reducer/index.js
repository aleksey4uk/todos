const initianalState = {
  data: [],
  value: ''
}

const reducer = (state = initianalState, action) => {
  switch(action.type) {
    case 'LOAD':
      return {
        ...state,
        data: action.payload,
        loading: true};

    case 'COMPLETE':
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

/*    case 'ADD':
      console.log("добавляем");
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      }
*/
    case 'EDIT':
      console.log("Редактируем");
      /*const idxRead = state.data.findIndex(item=> item.name === action.payload);*/
      return {
        ...state,
      }

    case 'CHECKED':
      const idxCheck = state.data.findIndex(item=> item.id === action.payload);
      let newelem = {
        ...state.data[idxCheck],
        checked: !state.data[idxCheck].checked
      };
      return {
        ...state,
        data: [
          ...state.data.slice(0, idxCheck),
          newelem,
          ...state.data.slice(idxCheck+1)
        ]
      }

    case 'ADD-VALUE':
      return {
        ...state,
        value: action.payload.target.value
      };

    case 'COMPLETE-VALUE':
    console.log(action.payload)
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
        value: ''
      };

    default: return state;
  }
}

export default reducer;
