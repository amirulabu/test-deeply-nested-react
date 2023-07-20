import { atom } from "jotai";

const errorTextAtom = atom("");
const hasErrorAtom = atom((get) => get(errorTextAtom).length > 0);

export { errorTextAtom, hasErrorAtom };
