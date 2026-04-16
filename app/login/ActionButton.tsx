import { Button } from "@mui/material";
interface Props {
  title: string;
//   disableFunction:()=>{}
}
export default function ActionButton({ title }: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ py: 1.4, fontSize: 20, borderRadius: 1.5 ,mt:3.5}}
    >
      {title}
    </Button>
  );
}
