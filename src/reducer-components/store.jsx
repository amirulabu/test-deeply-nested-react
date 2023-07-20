import { useReducer } from "react";

function reducer(state, action) {
  console.log({ errorText: state.errorText });
  switch (action.type) {
    case "hasError": {
      return {
        ...state,
        errorText: action.errorText,
      };
    }
    case "noError": {
      return {
        ...state,
        errorText: "",
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default function useErrorText() {
  const [state, dispatch] = useReducer(reducer, { errorText: "" });

  return [state, dispatch];
}
