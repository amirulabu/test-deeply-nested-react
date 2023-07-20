import { TextInput } from "@mantine/core";
import { useAtom } from "jotai";
import { useState } from "react";
import { errorTextAtom } from "./store";

function Form() {
  const [text, setText] = useState("");
  const [x, setErrorText] = useAtom(errorTextAtom);

  const handleOnChange = (event) => {
    const t = event.target.value;
    setText(t);

    if (t.length > 5) {
      setErrorText("The text is too long");
    } else {
      setErrorText("");
    }
  };

  return (
    <>
      <TextInput
        label="Text Jotai"
        placeholder="Enter your text"
        value={text}
        onChange={handleOnChange}
      />
    </>
  );
}

export default Form;
