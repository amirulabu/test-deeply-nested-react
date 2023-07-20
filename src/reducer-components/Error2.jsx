import useErrorText from "./store";

function Error2() {
  const [{ errorText }] = useErrorText();

  if (errorText == "") {
    return <div>No error</div>;
  }

  return <div>{errorText}</div>;
}

export default Error2;
