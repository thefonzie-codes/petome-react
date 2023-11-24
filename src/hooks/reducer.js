export function reducer(state, action) {
  switch (action.type) {

    case 'SET_EVENT_DATA':
      return { ...state, event: action.value };

  }
}