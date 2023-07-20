import { TextInput } from "@mantine/core";
import { useState } from "react";
import useErrorText from "./store";

function Form2() {
  const [text, setText] = useState("");

  const [state, dispatch] = useErrorText();

  console.log(state.errorText);

  const handleOnChange = (event) => {
    const t = event.target.value;
    setText(t);

    if (t.length > 5) {
      dispatch({ type: "hasError", errorText: "The text is too long" });
    } else {
      dispatch({ type: "noError" });
    }
  };

  return (
    <>
      <TextInput
        label="Text"
        placeholder="Enter your text"
        value={text}
        onChange={handleOnChange}
      />
    </>
  );
}

export default Form2;
