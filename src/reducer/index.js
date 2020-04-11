const initianalState = {
  data: [],
  value: '',
  editValue: {
    value: '',
  }
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
      const idx = state.data.findIndex((item)=>item.id ===action.payload);
      return {
        ...state,
        data: [
          ...state.data.slice(0, idx),
          ...state.data.slice(idx+1)
        ]
      }

    case 'EDIT':
      let value = action.payload.value;
      return {
        ...state,
        editValue: {
          value,
          id: action.payload.id,
          classes: 'on'
        }
      }

    case 'EDIT-START':
      return {
        ...state,
        editValue: {
          value: state.data.find(item=>item.id===action.payload).name,
          id: action.payload,
          classes: 'on'
        }
      };

    case 'EDIT-COMPLETE':
      const idxvalues = state.data.findIndex(item=> item.id === state.editValue.id);
      return {
        ...state,
        data: [
          ...state.data.slice(0, idxvalues),
          action.payload,
          ...state.data.slice(idxvalues+1)
        ],
        editValue: {
          ...state.editValue,
          classes: 'off',
        }
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
