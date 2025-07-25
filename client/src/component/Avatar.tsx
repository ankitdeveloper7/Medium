import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import { deepOrange } from "@mui/material/colors";

type props = {
  username: string;
  size: number;
};
export default function LetterAvatars({ username, size }: props) {
  const name = username[0].toUpperCase() || "";
  const num = size;
  return (
    <Stack direction="row">
      <Avatar sx={{ width: num, height: num }}> {name} </Avatar>
    </Stack>
  );
}
