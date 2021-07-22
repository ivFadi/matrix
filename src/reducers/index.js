const initialState = {
  transactionData: [],
  sd: ''
}

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "fetch":
      localStorage.setItem('transactionData', JSON.stringify(payload))
      return {...state, transactionData: payload};
    
    case "fetchSuccess":
      return {...state, data: payload}

    default:
      return state
    }
}