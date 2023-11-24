import { useReducer } from "react";

export default function useApplicationData() { 

  initialState = {
    event: 1
  }
  const [state, dispatch] = useReducer(initialState, reducer)

  return { 
    state, 
    setState,
  }
}