import useErrorText from "./store";

function Error2() {
  const [{ errorText }] = useErrorText();

  if (errorText == "") {
    return <div>Error reducer: No error</div>;
  }

  return <div>Error reducer: {errorText}</div>;
}

export default Error2;
