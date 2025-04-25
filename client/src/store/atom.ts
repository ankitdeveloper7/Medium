import { atom} from "recoil";

export const authvalueAtom = atom<string>({
    key:"authvalueAtom",
    default:""
});

export const BlogidAtom = atom({
    key:"BlogidAtom",
    default:1
});