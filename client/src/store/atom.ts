import { atom } from "recoil";

export const authvalueAtom = atom<string>({
  key: "authvalueAtom",
  default: "",
});

export const BlogidAtom = atom({
  key: "BlogidAtom",
  default: 1,
});

export const storiesAtom = atom({
  key: "storiesAtom",
  default: false,
});

export const userBlogAtom = atom({
  key: "userBlogAtom",
  default: [],
});

// export const blogeditAtom = atom({
//   key: "blogeditAtom",
//   default: 0,
// });

// export const blogeditstatusAtom = atom({
//   key: "blogeditstatusAtom",
//   default: false,
// });

export const usernameAtom = atom({
  key: "usernameAtom",
  default: "",
});
