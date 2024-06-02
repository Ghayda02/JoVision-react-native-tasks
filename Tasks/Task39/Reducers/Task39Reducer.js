const initialState = {
    text: '',
  };
  
  export const textReducer39 = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TEXT':
        return {
          ...state,
          text: action.payload,
        };
      default:
        return state;
    }
  }