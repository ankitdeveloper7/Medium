import { atom} from "recoil";

export const authvalueAtom = atom<string>({
    key:"authvalueAtom",
    default:""
});

export const BlogidAtom = atom({
    key:"BlogidAtom",
    default:1
});

export const storiesAtom = atom({
    key:"storiesAtom",
    default:false
})

export const userBlogAtom = atom({
    key:"userBlogAtom",
    default:[]
})
