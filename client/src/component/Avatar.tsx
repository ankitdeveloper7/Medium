import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import { deepOrange } from "@mui/material/colors";

type props = {
  username: string;
};
export default function LetterAvatars({ username }: props) {
  const name = username[0].toUpperCase() || "";
  const num = 56;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ width: 26, height: 26 }}> {name} </Avatar>
    </Stack>
  );
}
