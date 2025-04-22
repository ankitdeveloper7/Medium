import { atom} from "recoil";

export const authvalueAtom = atom<string>({
    key:"authvalueAtom",
    default:""
})