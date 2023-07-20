import { useAtom } from "jotai";
import { errorTextAtom, hasErrorAtom } from "./store";

function Error() {
  const [errorText] = useAtom(errorTextAtom);

  const [hasError] = useAtom(hasErrorAtom);

  if (!hasError) {
    return <div>No error</div>;
  }

  return <div>{errorText}</div>;
}

export default Error;
