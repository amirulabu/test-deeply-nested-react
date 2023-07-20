import { useAtom } from "jotai";
import { errorTextAtom, hasErrorAtom } from "./store";

function Error() {
  const [errorText] = useAtom(errorTextAtom);

  const [hasError] = useAtom(hasErrorAtom);

  if (!hasError) {
    return <div>Error Jotai: No error</div>;
  }

  return <div>Error Jotai: {errorText}</div>;
}

export default Error;
